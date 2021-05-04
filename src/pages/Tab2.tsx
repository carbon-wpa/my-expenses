import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton, useIonToast
} from '@ionic/react';
import './Tab2.css';
import { Dispatch, SetStateAction, useState } from 'react';

interface ISettings {
    sheetId: string,
    setSheetId: Dispatch<SetStateAction<string>>,
    apiKey: string,
    setApiKey: Dispatch<SetStateAction<string>>
}

const Tab2: React.FC<ISettings> = ({sheetId, setSheetId, apiKey, setApiKey}) => {

    const [inputSheetId, setInputSheetId] = useState<string>(sheetId);
    const [inputApiKey, setInputApiKey] = useState<string>(sheetId);

    const [present, dismiss] = useIonToast();

    const onSaveChanges = () => {
        setSheetId(inputSheetId);
        setApiKey(inputApiKey);
        present({
            message: 'Changes has been successfully saved!',
            color: 'success',
            duration: 2000
        })
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className={'ion-padding'}>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Settings</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel position="floating">Enter Sheet ID</IonLabel>
                    <IonInput value={inputSheetId}
                              onIonChange={(e) => setInputSheetId((e.target as HTMLInputElement).value)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Enter API key</IonLabel>
                    <IonInput value={inputApiKey}
                              onIonChange={(e) => setInputApiKey((e.target as HTMLInputElement).value)}></IonInput>
                </IonItem>
                <IonButton expand="full" color="primary" onClick={() => onSaveChanges()}>Save Changes</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
