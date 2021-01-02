import React from 'react'
import PropTypes from 'prop-types'

export const DidibudgetLogo = ({ title = 'didibudget' }) => (
	<div>
		<svg role="img" aria-labelledby="SVG-accessible-logo-title" xmlns="http://www.w3.org/2000/svg" viewBox="-218.14998779296872 -36.3625 936.2999755859374 222.725" preserveAspectRatio="xMidYMid">
			<title id="SVG-accessible-logo-title">{title}</title>
	  		<defs><filter id="editing-extrude-glow"><feFlood floodColor="#333333" result="flood-1"></feFlood><feMorphology operator="erode" radius="1" in="SourceAlpha" result="erode"></feMorphology><feComposite operator="in" in="flood-1" in2="erode" result="comp1"></feComposite><feConvolveMatrix order="3,3" divisor="1" in="comp1" result="convolve" kernelMatrix="0 0 0 1 1 1 0 0 0"></feConvolveMatrix><feOffset dx="-3" dy="0" in="convolve" result="extrude"></feOffset><feComposite operator="in" in="flood-1" in2="extrude" result="comp-extrude"></feComposite><feFlood floodColor="#000000" result="flood-2"></feFlood><feComposite operator="in" in="flood-2" in2="SourceAlpha" result="comp2"></feComposite><feMorphology operator="dilate" radius="1" in="comp2" result="dilate"></feMorphology><feOffset dx="-4.5" dy="0" in="dilate" result="offset"></feOffset><feGaussianBlur in="offset" stdDeviation="5.8" result="blur"></feGaussianBlur><feComponentTransfer in="blur" result="shadow"><feFuncA type="linear" slope="0.8" intercept="-0.2"></feFuncA></feComponentTransfer><feMerge><feMergeNode in="shadow"></feMergeNode><feMergeNode in="comp-extrude"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs><g filter="url(#editing-extrude-glow)"><g transform="translate(-89.19999384880066, 134.53562545776367)"><path d="M42.50-67.84L42.50-67.84L42.50-67.84Q47.10-67.84 50.69-66.82L50.69-66.82L50.69-66.82Q50.82-67.33 51.07-68.74L51.07-68.74L51.71-72.70L51.71-72.70Q52.22-75.26 52.99-79.49L52.99-79.49L55.04-89.60L80.51-92.16L66.30-17.92L66.30-17.92Q66.18-17.15 66.18-15.87L66.18-15.87L66.18-13.82L66.18-13.82Q66.18-11.01 67.58-8.90L67.58-8.90L67.58-8.90Q68.99-6.78 71.30-6.78L71.30-6.78L71.30-6.78Q68.74-0.77 60.93 1.79L60.93 1.79L60.93 1.79Q58.24 2.56 54.46 2.56L54.46 2.56L54.46 2.56Q50.69 2.56 47.23 0.58L47.23 0.58L47.23 0.58Q43.78-1.41 42.75-4.74L42.75-4.74L42.75-4.74Q40.70-1.41 36.61 0.58L36.61 0.58L36.61 0.58Q32.51 2.56 26.56 2.56L26.56 2.56L26.56 2.56Q20.61 2.56 15.68 1.02L15.68 1.02L15.68 1.02Q10.75-0.51 7.68-3.84L7.68-3.84L7.68-3.84Q2.05-10.37 2.05-25.22L2.05-25.22L2.05-25.22Q2.05-44.42 13.31-56.06L13.31-56.06L13.31-56.06Q24.58-67.84 42.50-67.84ZM41.60-60.16L41.60-60.16L41.60-60.16Q36.86-60.16 34.30-55.04L34.30-55.04L34.30-55.04Q31.74-49.92 29.12-37.25L29.12-37.25L29.12-37.25Q26.50-24.58 26.50-13.18L26.50-13.18L26.50-13.18Q26.50-5.38 31.10-5.38L31.10-5.38L31.10-5.38Q35.20-5.38 38.08-9.47L38.08-9.47L38.08-9.47Q40.96-13.57 42.11-20.35L42.11-20.35L49.02-57.86L49.02-57.86Q46.34-60.16 41.60-60.16ZM112.90-7.04L112.90-7.04L112.90-7.04Q108.93 2.56 96.26 2.56L96.26 2.56L96.26 2.56Q89.73 2.56 85.63-1.92L85.63-1.92L85.63-1.92Q82.18-5.89 82.18-9.86L82.18-9.86L82.18-9.86Q82.18-20.22 86.91-40.45L86.91-40.45L91.65-65.28L117.63-67.84L109.82-27.39L109.82-27.39Q107.65-17.92 107.65-14.59L107.65-14.59L107.65-14.59Q107.65-7.30 112.90-7.04ZM93.95-83.07L93.95-83.07L93.95-83.07Q93.95-88.06 98.11-90.75L98.11-90.75L98.11-90.75Q102.27-93.44 108.29-93.44L108.29-93.44L108.29-93.44Q114.30-93.44 117.95-90.75L117.95-90.75L117.95-90.75Q121.60-88.06 121.60-83.07L121.60-83.07L121.60-83.07Q121.60-78.08 117.57-75.52L117.57-75.52L117.57-75.52Q113.54-72.96 107.52-72.96L107.52-72.96L107.52-72.96Q101.50-72.96 97.73-75.52L97.73-75.52L97.73-75.52Q93.95-78.08 93.95-83.07ZM164.10-67.84L164.10-67.84L164.10-67.84Q168.70-67.84 172.29-66.82L172.29-66.82L172.29-66.82Q172.42-67.33 172.67-68.74L172.67-68.74L173.31-72.70L173.31-72.70Q173.82-75.26 174.59-79.49L174.59-79.49L176.64-89.60L202.11-92.16L187.90-17.92L187.90-17.92Q187.78-17.15 187.78-15.87L187.78-15.87L187.78-13.82L187.78-13.82Q187.78-11.01 189.18-8.90L189.18-8.90L189.18-8.90Q190.59-6.78 192.90-6.78L192.90-6.78L192.90-6.78Q190.34-0.77 182.53 1.79L182.53 1.79L182.53 1.79Q179.84 2.56 176.06 2.56L176.06 2.56L176.06 2.56Q172.29 2.56 168.83 0.58L168.83 0.58L168.83 0.58Q165.38-1.41 164.35-4.74L164.35-4.74L164.35-4.74Q162.30-1.41 158.21 0.58L158.21 0.58L158.21 0.58Q154.11 2.56 148.16 2.56L148.16 2.56L148.16 2.56Q142.21 2.56 137.28 1.02L137.28 1.02L137.28 1.02Q132.35-0.51 129.28-3.84L129.28-3.84L129.28-3.84Q123.65-10.37 123.65-25.22L123.65-25.22L123.65-25.22Q123.65-44.42 134.91-56.06L134.91-56.06L134.91-56.06Q146.18-67.84 164.10-67.84ZM163.20-60.16L163.20-60.16L163.20-60.16Q158.46-60.16 155.90-55.04L155.90-55.04L155.90-55.04Q153.34-49.92 150.72-37.25L150.72-37.25L150.72-37.25Q148.10-24.58 148.10-13.18L148.10-13.18L148.10-13.18Q148.10-5.38 152.70-5.38L152.70-5.38L152.70-5.38Q156.80-5.38 159.68-9.47L159.68-9.47L159.68-9.47Q162.56-13.57 163.71-20.35L163.71-20.35L170.62-57.86L170.62-57.86Q167.94-60.16 163.20-60.16ZM234.50-7.04L234.50-7.04L234.50-7.04Q230.53 2.56 217.86 2.56L217.86 2.56L217.86 2.56Q211.33 2.56 207.23-1.92L207.23-1.92L207.23-1.92Q203.78-5.89 203.78-9.86L203.78-9.86L203.78-9.86Q203.78-20.22 208.51-40.45L208.51-40.45L213.25-65.28L239.23-67.84L231.42-27.39L231.42-27.39Q229.25-17.92 229.25-14.59L229.25-14.59L229.25-14.59Q229.25-7.30 234.50-7.04ZM215.55-83.07L215.55-83.07L215.55-83.07Q215.55-88.06 219.71-90.75L219.71-90.75L219.71-90.75Q223.87-93.44 229.89-93.44L229.89-93.44L229.89-93.44Q235.90-93.44 239.55-90.75L239.55-90.75L239.55-90.75Q243.20-88.06 243.20-83.07L243.20-83.07L243.20-83.07Q243.20-78.08 239.17-75.52L239.17-75.52L239.17-75.52Q235.14-72.96 229.12-72.96L229.12-72.96L229.12-72.96Q223.10-72.96 219.33-75.52L219.33-75.52L219.33-75.52Q215.55-78.08 215.55-83.07ZM243.71-6.14L243.71-6.14L259.58-89.60L285.57-92.16L281.60-72.58L281.60-72.58Q280.19-66.56 278.40-62.34L278.40-62.34L278.40-62.34Q281.22-65.92 287.36-67.33L287.36-67.33L287.36-67.33Q289.15-67.84 291.33-67.84L291.33-67.84L291.33-67.84Q303.23-67.84 309.76-60.61L309.76-60.61L309.76-60.61Q316.29-53.38 316.29-39.42L316.29-39.42L316.29-39.42Q316.29-21.25 305.92-9.86L305.92-9.86L305.92-9.86Q294.78 2.56 274.56 2.56L274.56 2.56L274.56 2.56Q260.61 2.56 250.11-2.05L250.11-2.05L250.11-2.05Q246.40-3.71 243.71-6.14ZM276.22-44.80L269.44-7.30L269.44-7.30Q272.13-4.99 275.46-4.99L275.46-4.99L275.46-4.99Q278.78-4.99 280.70-6.27L280.70-6.27L280.70-6.27Q282.62-7.55 284.03-10.11L284.03-10.11L284.03-10.11Q287.87-17.02 290.94-38.14L290.94-38.14L290.94-38.14Q291.84-44.16 291.84-50.18L291.84-50.18L291.84-50.18Q291.84-56.19 290.50-58.11L290.50-58.11L290.50-58.11Q289.15-60.03 286.59-60.03L286.59-60.03L286.59-60.03Q278.78-60.03 276.22-44.80L276.22-44.80ZM365.06-5.38L365.06-5.38L365.06-5.38Q358.91 2.56 343.68 2.56L343.68 2.56L343.68 2.56Q335.74 2.56 329.98-2.24L329.98-2.24L329.98-2.24Q324.22-7.04 324.22-13.95L324.22-13.95L324.22-13.95Q324.22-17.79 324.61-19.71L324.61-19.71L333.18-65.28L359.17-67.84L349.82-18.43L349.82-18.43Q349.31-15.62 349.31-13.95L349.31-13.95L349.31-13.95Q349.31-6.53 353.79-6.53L353.79-6.53L353.79-6.53Q358.78-6.53 362.37-13.31L362.37-13.31L362.37-13.31Q363.52-15.49 364.03-18.30L364.03-18.30L373.12-65.28L398.34-67.84L388.86-17.92L388.86-17.92Q388.48-16 388.48-13.95L388.48-13.95L388.48-13.95Q388.48-11.90 389.63-9.66L389.63-9.66L389.63-9.66Q390.78-7.42 394.50-6.91L394.50-6.91L394.50-6.91Q393.73-3.84 391.04-1.79L391.04-1.79L391.04-1.79Q385.41 2.56 379.33 2.56L379.33 2.56L379.33 2.56Q373.25 2.56 369.66 0.38L369.66 0.38L369.66 0.38Q366.08-1.79 365.06-5.38ZM445.06-67.84L445.06-67.84L445.06-67.84Q449.66-67.84 453.25-66.82L453.25-66.82L453.25-66.82Q453.38-67.33 453.63-68.74L453.63-68.74L454.27-72.70L454.27-72.70Q454.78-75.26 455.55-79.49L455.55-79.49L457.60-89.60L483.07-92.16L468.86-17.92L468.86-17.92Q468.74-17.15 468.74-15.87L468.74-15.87L468.74-13.82L468.74-13.82Q468.74-11.01 470.14-8.90L470.14-8.90L470.14-8.90Q471.55-6.78 473.86-6.78L473.86-6.78L473.86-6.78Q471.30-0.77 463.49 1.79L463.49 1.79L463.49 1.79Q460.80 2.56 457.02 2.56L457.02 2.56L457.02 2.56Q453.25 2.56 449.79 0.58L449.79 0.58L449.79 0.58Q446.34-1.41 445.31-4.74L445.31-4.74L445.31-4.74Q443.26-1.41 439.17 0.58L439.17 0.58L439.17 0.58Q435.07 2.56 429.12 2.56L429.12 2.56L429.12 2.56Q423.17 2.56 418.24 1.02L418.24 1.02L418.24 1.02Q413.31-0.51 410.24-3.84L410.24-3.84L410.24-3.84Q404.61-10.37 404.61-25.22L404.61-25.22L404.61-25.22Q404.61-44.42 415.87-56.06L415.87-56.06L415.87-56.06Q427.14-67.84 445.06-67.84ZM444.16-60.16L444.16-60.16L444.16-60.16Q439.42-60.16 436.86-55.04L436.86-55.04L436.86-55.04Q434.30-49.92 431.68-37.25L431.68-37.25L431.68-37.25Q429.06-24.58 429.06-13.18L429.06-13.18L429.06-13.18Q429.06-5.38 433.66-5.38L433.66-5.38L433.66-5.38Q437.76-5.38 440.64-9.47L440.64-9.47L440.64-9.47Q443.52-13.57 444.67-20.35L444.67-20.35L451.58-57.86L451.58-57.86Q448.90-60.16 444.16-60.16ZM493.82-53.50L493.82-53.50L493.82-53.50Q498.18-59.65 504.77-63.74L504.77-63.74L504.77-63.74Q511.36-67.84 519.42-67.84L519.42-67.84L519.42-67.84Q527.49-67.84 531.33-65.28L531.33-65.28L556.42-67.84L547.71-18.69L547.71-18.69Q543.23 6.40 533.76 16.26L533.76 16.26L533.76 16.26Q524.67 25.60 507.01 25.60L507.01 25.60L507.01 25.60Q493.57 25.60 485.89 21.38L485.89 21.38L485.89 21.38Q478.21 17.15 478.21 10.11L478.21 10.11L478.21 10.11Q478.21 4.86 482.18 1.86L482.18 1.86L482.18 1.86Q486.14-1.15 492.29-1.15L492.29-1.15L492.29-1.15Q497.66-1.15 501.76 1.28L501.76 1.28L501.76 1.28Q504.19 2.56 505.34 4.35L505.34 4.35L505.34 4.35Q502.40 6.91 502.40 11.14L502.40 11.14L502.40 11.14Q502.40 16.64 507.52 16.64L507.52 16.64L507.52 16.64Q516.10 16.64 520.96-3.58L520.96-3.58L520.96-3.58Q522.37-9.09 523.52-14.59L523.52-14.59L523.52-14.59Q517.76-7.55 504.70-7.55L504.70-7.55L504.70-7.55Q495.62-7.55 490.37-11.90L490.37-11.90L490.37-11.90Q485.12-16.26 485.12-26.50L485.12-26.50L485.12-26.50Q485.12-32.90 487.30-40.13L487.30-40.13L487.30-40.13Q489.47-47.36 493.82-53.50ZM510.46-26.11L510.46-26.11L510.46-26.11Q510.46-17.41 514.94-17.41L514.94-17.41L514.94-17.41Q518.02-17.41 520.96-20.74L520.96-20.74L520.96-20.74Q523.26-23.42 524.16-27.39L524.16-27.39L530.69-60.29L530.69-60.29Q530.05-60.42 529.41-60.67L529.41-60.67L529.41-60.67Q528.13-61.18 526.46-61.18L526.46-61.18L526.46-61.18Q518.66-61.18 514.05-48.38L514.05-48.38L514.05-48.38Q510.46-38.40 510.46-26.11ZM613.25-21.63L613.25-21.63L613.25-21.63Q616.45-19.46 616.45-14.66L616.45-14.66L616.45-14.66Q616.45-9.86 614.02-6.78L614.02-6.78L614.02-6.78Q611.58-3.71 607.62-1.66L607.62-1.66L607.62-1.66Q599.42 2.56 590.59 2.56L590.59 2.56L590.59 2.56Q581.76 2.56 576.58 0.64L576.58 0.64L576.58 0.64Q571.39-1.28 567.94-4.86L567.94-4.86L567.94-4.86Q561.15-11.65 561.15-24.06L561.15-24.06L561.15-24.06Q561.15-43.39 571.65-55.17L571.65-55.17L571.65-55.17Q582.91-67.84 602.50-67.84L602.50-67.84L602.50-67.84Q614.66-67.84 620.67-62.72L620.67-62.72L620.67-62.72Q625.15-58.88 625.15-52.61L625.15-52.61L625.15-52.61Q625.15-30.08 586.24-30.08L586.24-30.08L586.24-30.08Q585.73-26.75 585.73-23.94L585.73-23.94L585.73-23.94Q585.73-18.05 588.35-15.81L588.35-15.81L588.35-15.81Q590.98-13.57 595.84-13.57L595.84-13.57L595.84-13.57Q600.70-13.57 605.89-15.81L605.89-15.81L605.89-15.81Q611.07-18.05 613.25-21.63ZM587.14-35.58L587.14-35.58L587.14-35.58Q596.22-35.58 601.47-41.22L601.47-41.22L601.47-41.22Q606.72-46.59 606.72-55.17L606.72-55.17L606.72-55.17Q606.72-58.11 605.63-59.71L605.63-59.71L605.63-59.71Q604.54-61.31 602.37-61.31L602.37-61.31L602.37-61.31Q600.19-61.31 598.34-60.48L598.34-60.48L598.34-60.48Q596.48-59.65 594.56-56.83L594.56-56.83L594.56-56.83Q589.82-50.43 587.14-35.58ZM631.55-12.80L631.55-12.80L631.55-12.80Q631.55-16.26 633.34-24.96L633.34-24.96L640.13-59.52L632.58-59.52L633.09-63.36L633.09-63.36Q648.45-67.97 663.30-79.23L663.30-79.23L669.44-79.23L666.37-65.28L676.35-65.28L675.20-59.52L665.34-59.52L658.82-24.96L658.82-24.96Q657.15-17.02 657.15-14.34L657.15-14.34L657.15-14.34Q657.15-8.19 662.53-6.91L662.53-6.91L662.53-6.91Q661.25-2.56 656.64 0L656.64 0L656.64 0Q652.03 2.56 645.50 2.56L645.50 2.56L645.50 2.56Q638.98 2.56 635.26-1.54L635.26-1.54L635.26-1.54Q631.55-5.63 631.55-12.80Z" fill="#eb6c6c"></path></g></g>
		</svg>
	</div>
)


DidibudgetLogo.propTypes = {
	title: PropTypes.string
}