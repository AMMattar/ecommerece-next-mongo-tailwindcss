import clientPromise from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try{
        const client = await clientPromise;
        const db = client.db("test-ecommerce");
        const product = await db
            .collection('products')
            .find({})
            .toArray();
        
        return NextResponse.json({product})
    }
    catch (e) {
        console.log(e);  
    }
    
    
}
