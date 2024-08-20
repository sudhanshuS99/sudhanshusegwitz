import { connect } from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
