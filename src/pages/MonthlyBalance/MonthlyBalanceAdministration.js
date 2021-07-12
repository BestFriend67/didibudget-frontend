import { Fragment } from 'react'

import { PageTitle } from '../../components/PageTitle'

import { GetListOfMonthlyBalance } from '../../components/MonthlyBalance/GetListOfMonthlyBalance'

const MonthlyBalanceAdministration = () => {
	return (
		<Fragment>
			<PageTitle text='Monthly balance list' />
			<GetListOfMonthlyBalance />
		</Fragment>
	)
}

MonthlyBalanceAdministration.displayName = 'MonthlyBalanceAdministration'

export default MonthlyBalanceAdministration
