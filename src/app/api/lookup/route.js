// src/app/api/lookup/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body to get the barcode (UPC)
    const { upc } = await request.json();

    // Call the external UPCitemdb API
    const externalResponse = await fetch('https://api.upcitemdb.com/prod/trail/lookup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ upc }),
    });

    if (!externalResponse.ok) {
      return NextResponse.json(
        { error: "Product lookup failed", status: externalResponse.statusText },
        { status: externalResponse.status }
      );
    }

    const data = await externalResponse.json();

    // Return the data with a header to allow all origins (for development)
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.error();
  }
}
