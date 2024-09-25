import BookForm from "../components/book/book.form"
import BookTable from "../components/book/book.table"


const BookPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <BookForm />
            <BookTable />
        </div>
    )
}
export default BookPage