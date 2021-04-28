interface TableProps<T = string> {
  list: Array<T>
  isLoading: boolean
  isError: boolean
}

const Table = ({ list, isLoading, isError }: TableProps) => {
  const TableContent = () => {
    if (isLoading) return <p>목록을 불러오는 중입니다.</p>
    if (isError) return <p>목록을 가져오는데 실패했습니다.</p>

    return (
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )
  }

  return <div>{TableContent()}</div>
}

export default Table
