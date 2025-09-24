// hooks/useDarkMode.ts
'use client'

import {useLayoutEffect, useState} from 'react'

function getInitialTheme(): boolean {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('theme')
		if (stored) return stored === 'dark'
		return window.matchMedia('(prefers-color-scheme: dark)').matches
	}
	return false
}

export function useDarkMode() {
	const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

	// Apply theme before paint
	useLayoutEffect(() => {
		const root = document.documentElement
		if (isDark) {
			root.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			root.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	const toggle = () => setIsDark((prev) => !prev)
	const setDark = () => setIsDark(true)
	const setLight = () => setIsDark(false)

	return {isDark, toggle, setDark, setLight}
}
