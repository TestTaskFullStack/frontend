import { SimpleGrid, Button, HStack } from "@chakra-ui/react"
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu"
import { useLocation, useNavigate } from "react-router-dom"
import GameCard from "./gameCard"

const Filter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const getCurrentTab = () => {
        const searchParams = new URLSearchParams(location.search);
        const ganre = searchParams.get('ganre');
        switch (ganre) {
            case 'members':
                return 'members';
            case 'projects':
                return 'projects';
            case 'tasks':
                return 'tasks';
            default:
                return 'members';
        }
    };

    const handleTabChange = (value) => {
        navigate(`?ganre=${value}`);
    };

    const currentTab = getCurrentTab();

    return (
        <SimpleGrid columns={2} gap="4" width="1200px" color="white" display={"flex"} flexDirection={"column"} >
            <HStack spacing={4}>
                <Button
                    variant="ghost"
                    color={currentTab === 'members' ? '#409c15' : 'white'}
                    onClick={() => handleTabChange('members')}
                    leftIcon={<LuUser />}
                    _hover={{ color: '#409c15' }}
                    _active={{ color: '#409c15' }}
                    fontWeight={currentTab === 'members' ? 'bold' : 'normal'}
                >
                    Members
                </Button>
                <Button
                    variant="ghost"
                    color={currentTab === 'projects' ? '#409c15' : 'white'}
                    onClick={() => handleTabChange('projects')}
                    leftIcon={<LuFolder />}
                    _hover={{ color: '#409c15' }}
                    _active={{ color: '#409c15' }}
                    fontWeight={currentTab === 'projects' ? 'bold' : 'normal'}
                >
                    Projects
                </Button>
                <Button
                    variant="ghost"
                    color={currentTab === 'tasks' ? '#409c15' : 'white'}
                    onClick={() => handleTabChange('tasks')}
                    leftIcon={<LuSquareCheck />}
                    _hover={{ color: '#409c15' }}
                    _active={{ color: '#409c15' }}
                    fontWeight={currentTab === 'tasks' ? 'bold' : 'normal'}
                >
                    Settings
                </Button>
            </HStack>
            {currentTab === 'members' && <GameCard />}
            {currentTab === 'projects' && <div>Manage your projects</div>}
            {currentTab === 'tasks' && <div>Manage your tasks for freelancers</div>}
        </SimpleGrid>
    )
}

export default Filter;