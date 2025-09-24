'use client'
import {cn} from '@/lib/utils'
import {ReactNode, useState} from 'react'
import {MoonIcon, SunIcon} from '@heroicons/react/24/outline'
interface DarkModeProps {
	children?: ReactNode
	className?: string
}

function PrefersColorScheme({className}: DarkModeProps) {
	const [dark, setDark] = useState(false)
	return (
		<button type="button" onClick={() => setDark(!dark)}>
			{dark ?
				<span className="inline-flex flex-col items-center ">
					<MoonIcon className="w-6 h-6" />
				</span>
			:	<span className="inline-flex flex-col items-center ">
					<SunIcon className="w-6 h-6" />
				</span>
			}
		</button>
	)
}

export default PrefersColorScheme
