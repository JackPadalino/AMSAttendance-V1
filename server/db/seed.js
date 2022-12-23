const {
    db,
    Teacher,
    HSSchedule,
    MSSchedule,
    Day,
    Absence,
    Coverage,
    Message
} = require('./');

const seed = async () => {
    console.log("STARTING DB SEED...");
    await db.sync({ force: true });

    const teacherList = [
        {
            firstName: 'Cortez',
            lastName: 'Wiza',
            email: 'Cortez.Wiza@hotmail.com',
            phoneNumber: '+14137616415'
        },
        {
            firstName: 'Alexzander',
            lastName: "O'Connell",
            email: 'Alexzander2@gmail.com',
            phoneNumber: '+15248333600'
        },
        {
            firstName: 'Dixie',
            lastName: 'Huel',
            email: 'Dixie_Huel@hotmail.com',
            phoneNumber: '+10793376154'
        },
        {
            firstName: 'Bianka',
            lastName: 'Robel',
            email: 'Bianka_Robel55@hotmail.com',
            phoneNumber: '+11264889993'
        },
        {
            firstName: 'Daren',
            lastName: 'Zieme',
            email: 'Daren80@yahoo.com',
            phoneNumber: '+11931469600'
        },
        {
            firstName: 'Jamie',
            lastName: 'Ryan',
            email: 'Jamie_Ryan@yahoo.com',
            phoneNumber: '+12771304402'
        },
        {
            firstName: 'Rudy',
            lastName: 'Moore',
            email: 'Rudy17@hotmail.com',
            phoneNumber: '+15336512135'
        },
        {
            firstName: 'Alicia',
            lastName: 'West',
            email: 'Alicia_West75@yahoo.com',
            phoneNumber: '+19168271342'
        },
        {
            firstName: 'Pasquale',
            lastName: 'Kris',
            email: 'Pasquale_Kris@gmail.com',
            phoneNumber: '+13715797956'
        },
        {
            firstName: 'Deborah',
            lastName: 'Hodkiewicz',
            email: 'Deborah97@yahoo.com',
            phoneNumber: '+12659173106'
        },
        {
            firstName: 'Jack',
            lastName: 'Padalino',
            email: 'pada0867@gmail.com',
            phoneNumber: '+15858804798'
        },
        {
            firstName: 'Mr',
            lastName: 'Padalino',
            email: 'jpadalino@amsbronx.org',
            phoneNumber: '+15858804745'
        }
    ];

    //-------------create all teachers here-------------//
    const [
        CortezWiza,
        AlexzanderOConnell,
        DixieHuel,
        BiankaRobel,
        DarenZieme,
        JamieRyan,
        RudyMoore,
        AliciaWest,
        PasqualeKris,
        DeborahHodkiewicz,
        JackPadalino,
        MrPadalino
    ] = await Promise.all(teacherList.map((teacher) => Teacher.create(teacher)));

    //-------------create all HS Schedules here-------------//
    const hsScheduleList = [
        {
            firstPeriod: null,
            secondPeriod: 'fugit',
            thirdPeriod: 'praesentium',
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'magnam',
            seventhPeriod: null,
            teacherId:CortezWiza.id
        },
        {
            firstPeriod: 'repudiandae',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: 'ex',
            teacherId:AlexzanderOConnell.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: 'fugiat',
            fourthPeriod: 'temporibus',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            teacherId:DixieHuel.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'dolore',
            thirdPeriod: 'alias',
            fourthPeriod: 'a',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: 'voluptatum',
            teacherId:BiankaRobel.id
        },
        {
            firstPeriod: 'voluptates',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'possimus',
            seventhPeriod: null,
            teacherId:DarenZieme.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'adipisci',
            thirdPeriod: 'velit',
            fourthPeriod: 'autem',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            teacherId:JamieRyan.id
        },
        {
            firstPeriod: null,
            secondPeriod: 'accusantium',
            thirdPeriod: 'itaque',
            fourthPeriod: 'maxime',
            fifthPeriod: 'Lunch',
            sixthPeriod: 'dolore',
            seventhPeriod: null,
            teacherId:RudyMoore.id
        },
        {
            firstPeriod: 'ut',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: 'sit',
            seventhPeriod: 'beatae',
            teacherId:AliciaWest.id
        },
        {
            firstPeriod: 'iusto',
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            teacherId:PasqualeKris.id
        },
        {
            firstPeriod: 'iure',
            secondPeriod: 'ex',
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            teacherId:DeborahHodkiewicz.id
        },
        {
            firstPeriod: 'recusandae',
            secondPeriod: 'occaecati',
            thirdPeriod: null,
            fourthPeriod: 'eveniet',
            fifthPeriod: 'Lunch',
            sixthPeriod: null,
            seventhPeriod: null,
            teacherId:JackPadalino.id
        }
    ];

    await Promise.all(hsScheduleList.map((schedule) => HSSchedule.create(schedule)));
    
    //-------------create all MS Schedules here-------------//
    const msScheduleList = [
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:CortezWiza.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:AlexzanderOConnell.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:DixieHuel.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:BiankaRobel.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:DarenZieme.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:JamieRyan.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:RudyMoore.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:AliciaWest.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:PasqualeKris.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:DeborahHodkiewicz.id
        },
        {
            firstPeriod: null,
            secondPeriod: null,
            thirdPeriod: null,
            fourthPeriod: null,
            fifthPeriod: null,
            sixthPeriod: null,
            teacherId:JackPadalino.id
        }
    ];

    await Promise.all(msScheduleList.map((schedule) => MSSchedule.create(schedule)));

    console.log("DB SEED COMPLETE.");
  };
  
  seed();