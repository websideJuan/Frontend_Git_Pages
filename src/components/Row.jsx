// eslint-disable-next-line react/prop-types
export const Row = ({ children, ClassName }) => {
  return <div className={`row ${ClassName}`}>
    {children}
  </div>
}
