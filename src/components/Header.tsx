import * as React from 'react'

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <header className="bg-green-400 shadow h-16 flex justify-center">
      <div className="text-white text-2xl self-center">Hello World!</div>
    </header>
  )
}

export default Header
