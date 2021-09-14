export default function ListComponent({list}){
    return(
        <table>
            <tbody>
                {list.length>0 && list.map((li)=>(
                    <tr>
                        ola pessoa
                    </tr>
                ))}
            </tbody>
        </table>
    )
}