import { NextResponse } from "next/server";
import dbConnect from "@/libs/dbConnect";
import Employee from "@/models/Employee";

export async function GET(req){
     await dbConnect();
     try{
        const data = await Employee.find();
        return NextResponse.json(data);
     }catch(error){
        return NextResponse.json({message:"Failed to fetch users!", error}, {status: 500})
     }

}