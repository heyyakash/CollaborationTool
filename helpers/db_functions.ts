import { Databases, Query } from "appwrite"


type args = {
    databases: Databases
    userId: string
}

const getProjects = async (databases: Databases, userId: string) => {
    const data = await databases.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DB as string, process.env.NEXT_PUBLIC_APPWRITE_DB_PROJECTS_COLLN as string, [Query.search("users", userId)])
    console.log(data.documents)
    return data.documents
}

export default getProjects