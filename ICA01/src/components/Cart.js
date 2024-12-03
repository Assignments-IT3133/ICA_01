export default function Cart({cart}) {
    const grandTotal = cart.reduce((total, item) => total + item.totalPrice, 0);
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                <tbody>
                {
                 cart.map(item=>(
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price}</td>
                        </tr>
                    )) 
                }
                </tbody>
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>${grandTotal}</td>
                </tr>
            </table>
           
        </div>
    );
}