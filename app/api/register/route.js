import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import User from "@/models/User";
import bcrypt from "bcrypt";


export async function POST(req) {

    const body = await req.json();


    await dbConnect();


    try{
        const {name, email, password} = body;

        const user = await new User({
            name,
            email,
            password: await bcrypt.hash(password,10),
        }).save();
        return NextResponse.json({success: "Registered Successfully!"})
    }catch(err){
        console.log(err);
        return NextResponse.json({err:err.message}, {status: 500})
    }
    
}
