import { Stack } from "@mui/material";
import { categories } from '../utils/Constants';

export default function SideBar(props) {
    return (
        <Stack
            direction="row"
            sx={{
                height: { sx: 'auto', md: '100%' },
                flexDirection: { md: 'column', },

            }}
            justifyContent='space-between'
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => props.setSelectedCategory(category.name)}
                    style={{
                        background: category.name === props.selectedCategory && '#A020F0', color: 'white'
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
            ))};
        </Stack>
    );
};