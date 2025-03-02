import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCategories} from '../Redux/slices/categorySlice'
import {filterProduct} from '../Redux/slices/productSlice'

function Nav() {

    const dispatch = useDispatch()
    const categories = useSelector((state)=> state.categories.categories)
    const status = useSelector((state)=> state.categories.status)
    const fetchedProducts = useSelector((state) => state.products)

    const [products, setProducts] = useState()


    useEffect(() => {
            console.log('Calling fetchCategories...', status); // Debugging
            if(status =='idle'){
                dispatch(fetchCategories());
            }
            
        }, [status]);

    useEffect(()=> {
        setProducts(fetchedProducts.products)
    },[fetchedProducts.status])

    const filterData = (category) => {
        console.log('================================', products)
        const payload = {category, products}
        dispatch(filterProduct(payload))
    }    

    return(
        <div className="Nav">
            <h3>Category</h3>
            {status === 'loading' && <p>Loading...</p>}
            <ul>
            {categories.map((category)=> (
                <div key={category.id}className="category">
                    <li><a href="#" onClick={()=>filterData(category)}>{category.name}</a></li>
                   
                </div>
            ))}
            </ul>
        </div>
        
    );
}

export default Nav