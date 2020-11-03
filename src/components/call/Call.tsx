import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import palette from '@/utils/styles/palette';
import ButtonImage from '@/components/common/ButtonImage';
import SimpleTable from '@/components/common/SimpleTable';
import Button from '@/components/common/Button';

interface Props {}

const formatDate = (date: Date) => format(date, 'yyyy/MM/dd hh:mm a');

const getSafeParam = (param?: string | number) => {
  if (param) return param;

  return '-';
};

const selectedCarRows: Array<{
  title: string;
  data: (item: any) => string | number;
}> = [
  {
    title: 'Licence Plate',
    data: ({ lp_num }) => getSafeParam(lp_num),
  },
  {
    title: 'Entry Time',
    data: ({ time }) => getSafeParam(time),
  },
  {
    title: 'Entrance',
    data: () => '-',
  },
  {
    title: 'Exit Time',
    data: ({ exit_time }) => getSafeParam(exit_time),
  },
  {
    title: 'Exit',
    data: ({ channel }) => getSafeParam(channel),
  },
  {
    title: 'Duration',
    data: ({ duration }) => getSafeParam(duration),
  },
  {
    title: 'Parking Fee',
    data: ({ fee }) => getSafeParam(fee),
  },
  {
    title: 'Vehicle Make',
    data: ({ exit_car_make }) => getSafeParam(exit_car_make),
  },
  {
    title: 'Vehicle Model',
    data: () => '-',
  },
];

const carRows: Array<{
  title: string;
  data: (item: any) => string | number;
}> = [
  {
    title: 'Licence Plate',
    data: ({ lp_num }) => getSafeParam(lp_num),
  },
  {
    title: 'Entry Time',
    data: ({ time }) => getSafeParam(time),
  },
  {
    title: 'Entrance',
    data: () => '-',
  },
  {
    title: 'Vehicle Make',
    data: ({ exit_car_make }) => getSafeParam(exit_car_make),
  },
  {
    title: 'Vehicle Model',
    data: () => '-',
  },
];

const selectedCar = {
  lp_num: 'dsaadas',
  time: formatDate(new Date()),
  exit_time: formatDate(new Date()),
  channel: 1,
  duration: '0.00',
  parking_fee: 18,
  exit_car_make: '-',
};

const cars = [
  {
    lp_num: 'dsaadas',
    time: formatDate(new Date()),
    exit_time: formatDate(new Date()),
    channel: 1,
    duration: '0.00',
    parking_fee: 18,
    exit_car_make: '-',
  },
  {
    lp_num: 'dsaaaaaadas',
    time: formatDate(new Date()),
    exit_time: formatDate(new Date()),
    channel: 1,
    duration: '0.00',
    parking_fee: 18,
    exit_car_make: '-',
  },
  {
    lp_num: '321312',
    time: formatDate(new Date()),
    exit_time: formatDate(new Date()),
    channel: 1,
    duration: '0.00',
    parking_fee: 18,
    exit_car_make: '-',
  },
  {
    lp_num: 'jljlkjlk',
    time: formatDate(new Date()),
    exit_time: formatDate(new Date()),
    channel: 1,
    duration: '0.00',
    parking_fee: 18,
    exit_car_make: '-',
  },
  {
    lp_num: 'iopiopipo',
    time: formatDate(new Date()),
    exit_time: formatDate(new Date()),
    channel: 1,
    duration: '0.00',
    parking_fee: 18,
    exit_car_make: '-',
  },
];

const Call: React.FC<Props> = () => (
  <CallWrapper>
    <CallContainer>
      <CallWindow>
        <Title>Exit Gate 4</Title>
        <VideoPlaceholder width="433px" height="312px" />
        <DropCallButton src="/assets/drop-call.png" alt="drop call" onClick={() => undefined} />
      </CallWindow>
      <CarsWrapper>
        <Title>Exit Gate 4</Title>
        <CarsContainer>
          <SelectedCar>
            <SelectedCarPlaceHolder width="255px" height="212px" />
            <SimpleTable rowsMap={selectedCarRows} item={selectedCar} />
          </SelectedCar>
          <CarsListWrapper>
            <CarsList>
              {cars.map((car) => (
                <CarItem key={JSON.stringify(car)}>
                  <CarPlaceholder width="157px" height="130px" />
                  <SimpleTable rowsMap={carRows} item={car} />
                </CarItem>
              ))}
            </CarsList>
          </CarsListWrapper>
        </CarsContainer>
        <SelectButton onClick={() => undefined}>Select</SelectButton>
      </CarsWrapper>
    </CallContainer>
    <OnCallInfo>
      You are on a call
    </OnCallInfo>
  </CallWrapper>
);

const CallWrapper = styled.div`
  width: 1350px;
  padding: 36px 47px 51px 33px;
  border: 1px solid ${palette.grey};
  border-radius: 5px;
  background-color: ${palette.white};
`;

const Title = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 17px;
`;

const Placeholder = styled.div<{width: string; height: string}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #C4C4C4;
  border-radius: 5px;
`;

const VideoPlaceholder = styled(Placeholder)`
  margin-bottom: 70px;
`;

const SelectedCarPlaceHolder = styled(Placeholder)`
  margin-bottom: 30px;
`;

const CarPlaceholder = styled(Placeholder)`
  margin-right: 15px;
`;

const CallContainer = styled.div`
  display: flex;
`;

const CallWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  position: relative;

  &::after {
    content: '';
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -45px;
    background-color:  #CCCCCC;
  }
`;

const DropCallButton = styled(ButtonImage)`
  align-self: center;
`;

const CarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarsContainer = styled.div`
  display: flex;
  height: 460px;
`;

const SelectButton = styled(Button)`
  align-self: flex-end;
  margin-top: 15px;
`;

const SelectedCar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 35px;
`;

const CarsListWrapper = styled.div`
  max-height: 100%;
  overflow: auto;
`;

const CarsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CarItem = styled.li`
  display: flex;
  align-items: center;
  padding-right: 40px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    right: 30px;
    left: -10px;
    background: rgba(33, 206, 153, 0.15);
    border: 2px solid ${palette.green};
    border-radius: 5px;
  }
`;

const OnCallInfo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 14px 242px;
  background-color: ${palette.purple};
  border-radius: 5px;
  color: ${palette.white};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export default Call;
