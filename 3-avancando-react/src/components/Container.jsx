const Container = ({ title, value, children }) => (
    <div>
        <h2>{title}</h2>
        {children}
        <p>{value}</p>
    </div>
)

export { Container }