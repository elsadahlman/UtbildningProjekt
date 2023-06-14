type FilterProps = {
    onClick: (limit: number) => void
}

const Filter = ({ onClick }: FilterProps) => {


    return (
        <>
            <button onClick={() => onClick(1)}>1</button>
            <button onClick={() => onClick(5)}>5</button>
            <button onClick={() => onClick(10)}>10</button>
        </>
    )
}

export default Filter;