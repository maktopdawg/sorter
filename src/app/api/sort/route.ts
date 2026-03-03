import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
    data: string
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
    let reqBody: RequestBody;

    try {
        reqBody = await req.json();

    } catch (error: unknown) {
        return NextResponse.json(
            {message: "Invalid json body."},
            {status: 400}
        )
    }

    const word: string = reqBody.data;
    if (!word || typeof word !== "string") {
        return NextResponse.json(
            {message: "Invalid input."},
            {status: 400}
        );
    }

    const sortedArray: string[] = word.split("").sort();
    return NextResponse.json({word: sortedArray});
}