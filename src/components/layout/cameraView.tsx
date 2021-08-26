import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Row from './../ui/row';
import Col from './../ui/col';
import Label from './../ui/label'
import Button from './../ui/button';
import Preview from './../ui/preview';
import { padding, colors, fonts } from './../../styles/base';
import { Camera } from 'expo-camera';

interface Props {
    onTapNext: (uri?: string) => {}
}

const CameraView = ({onTapNext}: Props) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [photoPreview, setPhotoPreview] = useState(null);
	const ref = useRef(null)
    
	const provideAccessToCamera = () => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
    }

	useEffect(() => {
		provideAccessToCamera();
	}, []);

	const takePicture = async () => {
		const photo = await ref.current.takePictureAsync()
		const { uri } = photo;
		console.log(uri)
		setPhotoPreview(uri)
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return (
			<Row>   
				<Col>				
					<Label fontSize={14} paddingBottom={10}>No access to camera</Label>
					<Button
						title="Provide Access to Camera"
						fontSize={fonts.sm}
						color={colors.textIcons}  
						backgroundColor={colors.primaryText} 
						onPress={provideAccessToCamera}
					/>                                  
				</Col>                         
			</Row>
		);
	}
	return (
		<View style={styles.mainBox}>
			{ photoPreview != null && (
				<Row flex={1}>
					<Col>

					</Col> 
					<Col>

					</Col> 
					<Col paddingLeft={padding.sm}>
						<Button 
							fontSize={12}
							title="Clear" 
							color={colors.textIcons}  
							backgroundColor={colors.secondaryText} 
							onPress={async () => setPhotoPreview(null)}
						/>
					</Col> 
				</Row>
			)}
			<Row flex={5}>
				<Col>
					{ photoPreview != null ? (
						<Preview   uri={photoPreview}/>
					):(
						<Camera style={styles.cameraBox} type={type} ref={ref} />
					)}
				</Col>
			</Row>
			<Row flex={1}>
				<Col>
				<Button 
					title="Flip Camera" 
					fontSize={12}
					paddingHorizontal={5}
					color={colors.textIcons}  
					backgroundColor={colors.accent} 
					disabled={photoPreview!=null}
					disabledText="Flip Camera"
					onPress={async () => setType(
					type === Camera.Constants.Type.back
						? Camera.Constants.Type.front
						: Camera.Constants.Type.back
					)}
				/>
				</Col> 
				<Col paddingLeft={padding.sm}>
				<Button 
					title="Take Picture" 
					fontSize={12}
					paddingHorizontal={5}
					color={colors.textIcons}  
					backgroundColor={colors.primaryText} 
					disabled={photoPreview!=null}
					disabledText="Take Picture"
					onPress={takePicture}
					/>
				</Col> 
				<Col paddingLeft={padding.sm}>
				<Button 
					title="Next" 
					fontSize={12}
					paddingHorizontal={5}
					color={colors.textIcons}  
					backgroundColor={colors.primary} 
					disabled={photoPreview==null}
					disabledText="Next"
					onPress={()=>onTapNext(photoPreview)}
				/>
				</Col> 
			</Row>
		</View>
	);
}

const styles = StyleSheet.create({
	mainBox: {
		paddingTop: padding.sm,
		flex: 1,
	},
	cameraBox: {
		flex: 1,
	},
});

export default CameraView;