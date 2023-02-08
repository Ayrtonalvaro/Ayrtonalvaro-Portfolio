import React, { useState, useEffect } from 'react'

import { Switch } from '@headlessui/react'

const Swtich = () => {
  const [enabled, setEnabled] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div className="relative">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={handleThemeSwitch}
        className={`${
          enabled ? 'bg-slate-900' : 'bg-gray-400'
        } relative inline-flex h-6 w-12 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }  h-4 w-4 transform rounded-full bg-white transition justify-center`}
        ></span>
      </Switch>
    </div>
  )
}

export default Swtich
