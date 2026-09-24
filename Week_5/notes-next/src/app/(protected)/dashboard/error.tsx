"use client"

export default function ErrorHandling( {error, reset}: { error: Error; reset: () => void}){
    return(
        <div>
            <p>Something Wen Wrong</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}