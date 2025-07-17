export const  UserCard=({item})=>{
    return <div className="border-1 border-black rounded w-[300px] h-[400px] bg-amber-100 m-5">
        <h1 className="text-2xl">{item?.name}</h1>
        <h1>{item?.username}</h1>

    </div>
}