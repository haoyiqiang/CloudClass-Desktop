import { ToolCabinet, Icon, t } from 'agora-scenario-ui-kit'
import React from 'react'
import { useBoardStore, useSceneStore } from '@/hooks'

export const ToolCabinetContainer = () => {
    const sceneStore = useSceneStore()

    const boardStore = useBoardStore()

    return (
        <ToolCabinet
            value='tools'
            label={t('scaffold.tools')}
            icon='tools'
            cabinetList={[
                {
                    id: 'screenShare',
                    icon: <Icon type="share-screen" />,
                    name: t('scaffold.screen_share')
                },
                {
                    id: 'laserPoint',
                    icon: <Icon type="laser-pointer" />,
                    name: t('scaffold.laser_pointer')
                },
            ]}
            onClick={async id => {
                switch (id) {
                    case 'screenShare': {
                        await sceneStore.startOrStopSharing();
                        break;
                    }
                    case 'laserPoint': {
                        await boardStore.setLaserPoint()
                    }
                }
            }}
        />
    )
}