import { Stack } from "@mui/material";
import { categories } from '../utils/Constants';

export default function SideBar(props) {
    return (
        <Stack
            direction={{ xs: 'row', md: 'column' }}
            sx={{
                overflowY: "auto",
                height: { xs: 'auto', md: '95vh' },
                flexWrap: 'nowrap',
                alignItems: { xs: 'center', md: 'flex-start' },
            }}
            justifyContent={{ xs: 'space-between', md: 'start' }}
            gap={1}
            border="1px solid lightblue" borderRadius="50px"
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => props.setSelectedCategory(category.name)}
                    style={{
                        background: category.name === props.selectedCategory && '#A020F0',
                        color: 'white',
                        margin: '10px',
                    }}
                    key={category.name}
                >
                    <span style={{
                        color: category.name === props.selectedCategory ? 'white' : '#A020F0',
                        marginRight: '15px'
                    }}>
                        {category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    );
};
