import { Input, Button } from "antd"
import { useState } from "react"

const BookForm = () => {
    const [mainText, setMainText] = useState()
    const [author, setAuthor] = useState()
    const [price, setPrice] = useState()
    const [sold, setSold] = useState()
    const [quantity, setQuantity] = useState()
    const [category, setCategory] = useState()
    return (
        <div className="book-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Main Text</span>
                    <Input
                        value={mainText}
                        onChange={(event) => { setMainText(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Author</span>
                    <Input
                        value={author}
                        onChange={(event) => { setAuthor(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Price</span>
                    <Input
                        value={price}
                        onChange={(event) => { setPrice(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Sold</span>
                    <Input
                        value={sold}
                        onChange={(event) => { setSold(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Quantity</span>
                    <Input
                        value={quantity}
                        onChange={(event => { setQuantity(event.target.value) })}
                    />
                </div>

                <div>
                    <span>Category</span>
                    <Input
                        value={category}
                        onChange={(event) => { setCategory(event.target.value) }}
                    />
                </div>

                <div>
                    <Button type="primary">Create Book</Button>
                </div>
            </div>


        </div>

    )
}
export default BookForm