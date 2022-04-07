import { useStore } from '@/infra/hooks/use-edu-stores';
import { GroupMethod } from '@/infra/stores/common/group-ui';
import { range } from 'lodash';
import { observer } from 'mobx-react';
import { useMemo, useState, FC } from 'react';
import { Button, RadioGroup, Select, transI18n } from '~ui-kit';

type Props = {
  onNext: (params: { groupNum: number }) => void;
};

export const Start: FC<Props> = observer(({ onNext }) => {
  const { groupUIStore } = useStore();

  const { createGroups, numberToBeAssigned } = groupUIStore;

  const groupNumOptions = useMemo(
    () =>
      range(1, 32).map((i) => ({
        label: `${i}`,
        value: i,
      })),
    [],
  );

  const [groupNum, setGroupNum] = useState(1);

  const [type, setType] = useState(GroupMethod.MANUAL);

  const perGroup = Math.floor(numberToBeAssigned / groupNum);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="outline-box items-center flex justify-center">
        <div className="inline-flex flex-col">
          <div className="inline-flex items-center mb-3">
            <span className="mr-1">{transI18n('breakout_room.create_prefix')}</span>
            <Select
              className="group-select"
              size="sm"
              options={groupNumOptions}
              onChange={(num) => {
                setGroupNum(num);
              }}
              value={groupNum}
            />
            <span className="ml-1">{transI18n('breakout_room.create_suffix')}</span>
          </div>
          <RadioGroup
            gap={3}
            direction="vertical"
            radios={[
              // { label: transI18n('breakout_room.auto'), value: GroupMethod.AUTO },
              { label: transI18n('breakout_room.manual'), value: GroupMethod.MANUAL },
            ]}
            name="breakout-room-type"
            value={type}
            onChange={(value) => {
              setType(value);
            }}
          />
        </div>
      </div>
      <div className="my-3">
        {transI18n('breakout_room.wait_for_assign1', {
          reason: `${numberToBeAssigned}`,
        })}
        {numberToBeAssigned > 0 &&
          transI18n('breakout_room.wait_for_assign2', {
            reason: `${perGroup}-${perGroup + 1}`,
          })}
      </div>
      <Button
        size="xs"
        className="rounded-btn"
        onClick={() => {
          createGroups(type, groupNum);
          onNext({ groupNum });
        }}>
        {transI18n('breakout_room.create_submit')}
      </Button>
    </div>
  );
});