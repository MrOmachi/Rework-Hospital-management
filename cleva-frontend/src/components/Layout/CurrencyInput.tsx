interface input {
  title: string,
  value: string | number,
  fn: any,
  onBlur?: any,
  type: string,
  err: string,
  readOnly?: boolean,
  placeholder?: string,
  flag: any,
  code: string
 }
 
export default function CurrencyInput({
  title,
  type,
  fn,
  onBlur,
  value,
  err,
  readOnly,
  placeholder,
  flag,
  code
 }: input) {
  return (
    <div>
      <header className='text-[12px] pb-1 pt-5 text-left'>
     {title}
    </header>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          onChange={fn}
          onBlur={onBlur}
          placeholder={placeholder}
          readOnly={readOnly}
          value={value}
          className="input-control"
          aria-describedby="price-currency"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <p className="text-sm mr-1.5">{code}</p>
          <img src={flag} alt="" srcSet="" />
        </div>
      </div>
    </div>
  )
}


