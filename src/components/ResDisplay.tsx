'use client'

interface ResDisplayProps {
    response?: string | null
    error?: string | null
}

const ResDisplay = ({response, error}: ResDisplayProps) => {
    if (!response && error) return null;

    const component = (
        <div className="mt-4">
            {response && (
                <div className="bg-gray-100 p-4 rounded">
                    <h2></h2>
                    <pre className="whitespace-pre-wrap">{response}</pre>
                </div>
            )}

            {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded">
                    <h2 className="font-bold">Error:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    )

    return component;
}

export default ResDisplay;