import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ProfileScreen = ({ studentData }) => {
  // Sample student data
  const defaultData = {
    name: 'ITUMELENG SELLO',
    studentNumber: '901016455',
    semester: 'Semester 4 (2022-2026)',
    grades: [
      { course: 'Mobile Development', grade: 'A' },
      { course: 'Web Development', grade: 'B+' },
      { course: 'Database Management', grade: 'B' },
      { course: 'C++ Programming II', grade: 'A*' },
      { course: 'java programming I', grade: 'B' },
    ],
  };

  const data = studentData || defaultData;

  return (
    <ScrollView style={{ flex: 1, padding: 0,backgroundColor:'#FC819E' }}>
      <View style={{ marginBottom: 60, alignItems:'center'}}>
        <Image
          source={( './sa.png' )}
          style={{ width: 400, height: 400}}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {data.name}
        </Text>
        <Text>{data.studentNumber}</Text>
      </View>
      <View style={{ marginBottom: 20,paddingHorizontal:210}}>
        <Text style={{ fontSize: 18 }}>Current Semester:</Text>
        <Text>{data.semester}</Text>
      </View>
      <Text style={{ fontSize: 18, marginBottom: 20,paddingHorizontal:210 }}>Grades:</Text>
      {data.grades.map((grade, index) => (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 5 }}>
          <Text>{grade.course}</Text>
          <Text>{grade.grade}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileScreen;
