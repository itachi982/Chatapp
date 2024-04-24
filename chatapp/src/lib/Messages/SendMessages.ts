
import { Query } from "appwrite";
import {databases,ID} from "../../Appwrite/AppwriteConfig"

export const Send=async(Content:string,id:string,Recid:string)=>{
    console.log(Date.now());
    const response = await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_MESSAGES_ID,
        ID.unique(),
        {
            "SenderID":id,
            "RecID":Recid,
            "Content":Content,
        }
    )
}

export const GetMsg=async (id:string,RecID:string)=>{

    console.log("GETING")
    const messages=await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_MESSAGES_ID,
        [
            // Query.select([Query.equal('SenderID',id),Query.equal('RecID',RecID)]),
            Query.equal("RecID",RecID),
            Query.limit(10),
        ]
    )

    console.log(messages);


}