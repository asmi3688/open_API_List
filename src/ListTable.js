import { Box, DataTable, Text, Anchor } from 'grommet';

const columns= [   
    {
      property: 'API',
      header: <Text>API</Text>,
      align: 'center'
    },
    {
        property: 'Category',
        header: <Text>Category</Text>,
        align: 'center'
    },    
    {
        property: 'Description',
        header: <Text>Description</Text>,
        align: 'center'
    },
    {
        property: 'Link',
        header: <Text>Link</Text>,
        align: 'center',
        render: (datum) => (<Anchor color="#5bc0de" href={ datum.Link } label={ datum.Link } />),
    }    
  ];

const ListTable = ({ tableData }) => {
    const { entries } = tableData
    return (
        <Box pad="small">
            <Box pad="small">
                <Box pad="small">  
                 <DataTable
                    columns={columns}
                    data={entries}
                    background={{
                        header: { color: 'dark-3', opacity: 'strong' },
                        body: ['light-1', 'light-3']
                      }}
                    border={{ body: 'bottom' }}
                    sortable
                    step={15}
                    paginate
                    />
                </Box>
            </Box>
        </Box>
    )
}
export default ListTable;