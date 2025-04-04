import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import Employee from "@/models/Employee";




export async function POST(req){
    const body = await req.json();


    await dbConnect();


    try{
        const {name, email, salary, days} = body;
        
        const employee =  new Employee({
            name,
            email,
            salary,
            days
        });
        const saved = await employee.save();
        return NextResponse.json({success: "Registered Successfully!"})
    }catch(err){
        console.log(err);
        return NextResponse.json({err:err.message}, {status:500});
    }
}


