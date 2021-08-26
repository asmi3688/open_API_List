import ListTable from "./ListTable"
import { Box } from 'grommet';
const OpenApiList = ({ openApiList })=>{
    return (
    <Box color="brand" >
        <ListTable tableData={ openApiList }/>
    </Box>
    )
}
export default OpenApiList;