const decodeJwt = (token ) => {
    try {
        //  const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decoded = token.split('.')[1]; // Get the payload part of the JWT
    const decodedPayload = Buffer.from(decoded, 'base64').toString('utf-8');    
        return decoded;
    } catch (error) {
        console.error("Error decoding JWT:", error);
        return null;
    }
}
