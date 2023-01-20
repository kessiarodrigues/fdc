export default function Button({ children, className }) {
    return (
      <button className={` 
       text-white 
       text-base
       font-OpenSans 
       font-bold
       px-6 py-3 
       leading-[22.4px]
       ${className}`}>{children}</button>
    )
  }