export default function Button({ children, className }) {
    return (
      <button className={` 
       text-white 
       text-sm
       font-bold 
       w-60 h-14 
       pr-6 pl-6 py-3 
   
       ${className}`}>{children}</button>
    )
  }
  //bg-[#3498db]