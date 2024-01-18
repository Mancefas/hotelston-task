import { useStore } from '@/store/useStore';
import { getLongForecast } from '@/helpers/getLongForecast';
import Container from '@/components/atoms/Container/Container';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';

type SelectCitySectionProps = {};

const SelectCitySection = ({}: SelectCitySectionProps) => {
    const { setData, place, setPlace, setError } = useStore();

    const getData = async () => {
        try {
            const data = await getLongForecast(place);
            setData(data);
        } catch (error: any) {
            setError(error.message);
            setData(null);
        }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlace(e.target.value.toLowerCase());
    };

    return (
        <Container>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Input
                    type="text"
                    placeholder="different city"
                    value={place}
                    changeValue={inputHandler}
                />
                <Button text="search" clickHandler={getData} />
            </div>
        </Container>
    );
};

export default SelectCitySection;
