import React from 'react'

interface titleProps {
  title: string
}
const Title = ({ title }: titleProps) => {
  return (
    <div className="bg-white shadow-lg px-2 py-4 border-l-secondary border-l-4" >
     <h2 className="text-xl font-bold text-gray-600">{title}</h2>
    </div>
  )
}


export default Title