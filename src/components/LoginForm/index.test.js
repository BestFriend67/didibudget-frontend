import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'

import { LOGIN } from '../../gql/mutations/auth'
import { LoginForm } from './'

describe('LoginForm', () => {
	it('should render a disabled button until password and email inputs are filled with data', () => {
		const activateAuth = jest.fn()
		const mocks = []

		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<LoginForm activateAuth={activateAuth}/>
			</MockedProvider>
		)
		const emailInput = screen.getByRole('textbox', { name: /Email/i })
		const passwordInput = screen.getByPlaceholderText(/password/)
		const submitButton = screen.getByRole('button', { name: 'Log in' })
		
		expect(emailInput.value).toBe('')
		expect(passwordInput.value).toBe('')
		expect(submitButton).toBeDisabled()

		fireEvent.change(emailInput, { target: { value: 'example@mail.com' } })
		expect(submitButton).toBeDisabled()

		fireEvent.change(passwordInput, { target: { value: 'ABCabc*1234*4321' } })
		expect(submitButton).not.toBeDisabled()

		fireEvent.change(emailInput, { target: { value: '' } })
		fireEvent.change(passwordInput, { target: { value: '' } })
		expect(submitButton).toBeDisabled()
	})

	it('should call to activateAuth method passing a token as argument if credentials are valid', async () => {
		const activateAuth = jest.fn()
		const mocks = [
			{
				request: {
					query: LOGIN,
					variables: {
						email: 'example@mail.com',
						password: 'ABCabc*1234*4321',
					},
				},
				result: {
					data: {
						authUser: {
							token: 'f3b2c1a0d2'
						}
					},
				},
			},
		]

		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<LoginForm activateAuth={activateAuth}/>
			</MockedProvider>
		)

		const emailInput = screen.getByRole('textbox', { name: /Email/i })
		const passwordInput = screen.getByPlaceholderText(/password/)
		const submitButton = screen.getByRole('button', { name: 'Log in' })

		//act(() => {}) TODO: What is going on here???
		fireEvent.change(emailInput, { target: { value: 'example@mail.com' } })
		fireEvent.change(passwordInput, { target: { value: 'ABCabc*1234*4321' } })
		fireEvent.click(submitButton)

		await new Promise(resolve => setTimeout(resolve, 0))

		expect(activateAuth).toHaveBeenCalled()
		expect(activateAuth).toHaveBeenCalledWith('f3b2c1a0d2')
	})
})