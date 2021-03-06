import { Box, Skeleton, View } from 'native-base';

import theme from '~theme/theme';
type LoadingProps = {
  isLoaded: boolean;
  setIsLoaded?: () => void;
}

const Loading = () => {
  
    return (
        <Box flexDirection={'row'} height='100%'>
            <View 
                flexDirection={'column'} 
                width={'100%'}
                height={'100%'}
            >
                <Skeleton 
                    startColor={theme.colors.components.placeholderActive}
                    endColor={theme.colors.components.selectedState}
                    h={"8%"} 
                />
              <Box style={{marginHorizontal:'5%', marginTop:'5%', height:'40%', flex: 1}}>
                <View flexDir={'row'} alignItems={'flex-end'}>
                    <Skeleton 
                        height={'25%'} 
                        width={'25%'} 
                        mt={'10%'} 
                        mb={'15%'} 
                        rounded={'3xl'}
                        mr={'60%'}
                        endColor={theme.colors.components.offWhite}
                        startColor={theme.colors.components.selectedState}
                    />
                    <Skeleton 
                        height={'15%'} 
                        width={'16%'} 
                        mt={'10%'} 
                        mb={'15%'} 
                        rounded={'sm'} 
                        startColor={theme.colors.actions.actionShade2}
                        endColor={theme.colors.actions.actionShade0}
                        alignSelf={'flex-start'}
                    />
                </View>
                <Skeleton width={'container'}
                  endColor={theme.colors.components.selectedState}
                  startColor={theme.colors.components.placeholderActive} />
                <Skeleton 
                  width={'container'} 
                  endColor={theme.colors.components.offWhite}
                  startColor={theme.colors.components.selectedState}
                  borderColor = {theme.colors.components.selectedState}
                  borderWidth={1}
    
                />
                <Skeleton width={'container'} 
                  endColor={theme.colors.components.offWhite}
                  startColor={theme.colors.components.selectedState}
                  borderColor = {theme.colors.components.selectedState}
                  borderWidth={1}

                />
                <Skeleton width={'container'} 
                endColor={theme.colors.components.offWhite}
                startColor={theme.colors.components.selectedState}
                borderColor = {theme.colors.components.selectedState}
                borderWidth={1}
                />
                <Skeleton width={'container'} 
                  endColor={theme.colors.components.offWhite}
                  startColor={theme.colors.components.selectedState}
                  borderColor = {theme.colors.components.selectedState}
                  borderWidth={1}
                />

              </Box>          
          </View>                
        </Box>
)};

export default Loading;