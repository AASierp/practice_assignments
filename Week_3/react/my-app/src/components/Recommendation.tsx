import { useEffect, useState } from "react";
import { RecommendationCard } from "./RecommendationCards";
import type { recommendationType } from "./RecommendationCards";
import { Card } from "../ui/Card";

function dataParse(data: {products: recommendationType[]} ){

        const productsArray = data.products;

        return productsArray;
    }

export function Recommendation(){

    const [recommendations, setRecommendations] = useState<recommendationType[]>([]);
    const [loadingStatus, setLoadingStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("smartphones");


    useEffect(() =>  {

        
            const fetchData = async () => {
                try{
                    const response = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`);
                    if(!response.ok){
                        setErrorMessage(`Data not accessible: ${response.status}`);
                    }
                    else{
                        const jsonData =  await response.json();
                        const data = dataParse(jsonData);
                        setRecommendations(data);

                    }
                }catch(error){
                    setErrorMessage(`Fetch failed ${error}`);
                }finally{
                    setLoadingStatus(false)
                    
                }
            } 
            fetchData();
    }, [selectedCategory])


    return(
        <>
            {loadingStatus && <p className="px-3 font-bold border rounded-lg">Loading...</p>}
            {!loadingStatus && !errorMessage && recommendations.length > 0 && <p className="font-bold text-blue-700 border w-20 m-3 rounded-lg">Success!</p>}
            {errorMessage && <p className="text-red-600 font-bold border rounded-lg">{errorMessage}</p>}
            {!loadingStatus && !errorMessage && recommendations.length === 0 && <p className="font-bold text-red-900 border rounded-lg">The results were empty</p>}
            <div>
                <label htmlFor="category">Select Category</label>
                <select id="category" value={selectedCategory} onChange={(e) => {setLoadingStatus(true); setErrorMessage(""); setSelectedCategory(e.target.value);}} className="bg-amber-50 m-3 border p-2 rounded-lg focus:outline-none focus:ring-2">
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="furniture">Furniture</option>
                    <option value="beauty">Beauty</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((rec) => {
                        return(
                            <Card key={rec.id}>
                                <RecommendationCard 
                                    title = {rec.title}
                                    description = {rec.description}
                                    category = {rec.category}
                                    price = {rec.price}
                                />
                            </Card>
                        )})}
            </div>
        </>
    )
}