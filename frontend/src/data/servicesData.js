const serviceCategories = [
  {
    category: "Radiology & Imaging",
    services: [
      {
        id: "ctscan",
        shortTitle: "CT",
        title: "CT Scan",
        short: "Advanced CT imaging for precise diagnostic evaluation.",
        image: "/images/services/ct-scan.png",
        description:
          "High-resolution CT scan services for brain, chest, abdomen, spine, and full-body diagnostics.",
        benefits: [
          "High-Speed Imaging",
          "Accurate Diagnosis",
          "Advanced Technology",
          "Experienced Radiologists",
        ],
        uses: [
          "Brain Scan",
          "Chest Imaging",
          "Abdominal Assessment",
          "Trauma Evaluation",
        ],
        preparation: [
          "Carry previous reports if available",
        ],
        gallery: [
          "/images/services/ct/1.jpg",
          "/images/services/ct/2.jpg",
          "/images/services/ct/3.jpg",
        ],
      },

      {
        id: "mri",
        shortTitle: "MRI",
        title: "MRI Scan",
        short: "Advanced MRI diagnostics with precision imaging.",
        image: "/images/services/mri/main.jpg",
        description:
          "Advanced MRI imaging for brain, spine, joints, and soft tissue diagnosis.",
        benefits: [
          "Radiation Free Imaging",
          "High Resolution Scanning",
          "Experienced Radiologists",
          "Fast Reports",
        ],
        uses: [
          "Brain MRI",
          "Spine MRI",
          "Joint Imaging",
          "Soft Tissue Evaluation",
        ],
        preparation: [
          "Remove metallic objects before scan",
        ],
        gallery: [
          "/images/services/mri/1.jpg",
          "/images/services/mri/2.jpg",
          "/images/services/mri/3.jpg",
        ],
      },

      {
        id: "usg",
        shortTitle: "USG",
        title: "Ultrasound",
        short: "Comprehensive ultrasound imaging services.",
        image: "/images/services/usg/main.jpg",
        description:
          "Modern ultrasound imaging for abdominal, pelvic, pregnancy, and soft tissue assessment.",
        benefits: [
          "Safe Imaging",
          "Real-time Monitoring",
          "Non-invasive Procedure",
          "Accurate Diagnosis",
        ],
        uses: [
          "Pregnancy Scan",
          "Abdominal Ultrasound",
          "Pelvic Scan",
          "Soft Tissue Imaging",
        ],
        preparation: [
          "Drink water if advised before scan",
        ],
        gallery: [
          "/images/services/usg/1.jpg",
          "/images/services/usg/2.jpg",
          "/images/services/usg/3.jpg",
        ],
      },

      {
        id: "doppler",
        shortTitle: "Doppler",
        title: "Color Doppler",
        short: "Advanced Doppler imaging for blood flow analysis.",
        image: "/images/services/doppler/main.jpg",
        description:
          "Color Doppler ultrasound imaging for accurate blood flow and vascular assessment.",
        benefits: [
          "Non-invasive Imaging",
          "Real-time Blood Flow Analysis",
          "Safe Procedure",
          "Accurate Diagnosis",
        ],
        uses: [
          "Vascular Assessment",
          "Pregnancy Monitoring",
          "Blood Flow Evaluation",
        ],
        preparation: [
          "Carry previous reports if available",
        ],
        gallery: [
          "/images/services/doppler/1.jpg",
          "/images/services/doppler/2.jpg",
          "/images/services/doppler/3.jpg",
        ],
      },

      {
        id: "xray",
        shortTitle: "X-Ray",
        title: "Digital X-Ray",
        short: "Advanced digital radiography and diagnostic imaging.",
        image: "/images/services/xray/main.jpg",
        description:
          "Digital X-Ray imaging for bones, chest, joints, and general radiology diagnosis.",
        benefits: [
          "Low Radiation",
          "Fast Imaging",
          "Digital Reports",
          "High Accuracy",
        ],
        uses: [
          "Bone Imaging",
          "Chest X-Ray",
          "Joint Assessment",
          "General Radiology",
        ],
        preparation: [
          "Remove metallic accessories if advised",
        ],
        gallery: [
          "/images/services/xray/1.jpg",
          "/images/services/xray/2.jpg",
          "/images/services/xray/3.jpg",
        ],
      },

      {
        id: "mammography",
        shortTitle: "Mammo",
        title: "Mammography",
        short: "Advanced breast imaging and screening services.",
        image: "/images/services/mammography/main.jpg",
        description:
          "Modern mammography imaging for early breast cancer detection and diagnosis.",
        benefits: [
          "Early Detection",
          "Low Radiation",
          "High Accuracy",
          "Experienced Specialists",
        ],
        uses: [
          "Breast Cancer Screening",
          "Breast Examination",
          "Diagnostic Imaging",
        ],
        preparation: [
          "Avoid deodorants before test",
        ],
        gallery: [
          "/images/services/mammography/1.jpg",
          "/images/services/mammography/2.jpg",
          "/images/services/mammography/3.jpg",
        ],
      },

      {
        id: "dexa",
        shortTitle: "DEXA",
        title: "DEXA Scan",
        short: "Advanced bone density assessment services.",
        image: "/images/services/dexa/main.jpg",
        description:
          "DEXA scan for bone mineral density evaluation and osteoporosis diagnosis.",
        benefits: [
          "Accurate Bone Density",
          "Low Radiation",
          "Fast Procedure",
          "Reliable Results",
        ],
        uses: [
          "Osteoporosis Detection",
          "Bone Health Monitoring",
          "Fracture Risk Assessment",
        ],
        preparation: [
          "Avoid calcium supplements before test",
        ],
        gallery: [
          "/images/services/dexa/1.jpg",
          "/images/services/dexa/2.jpg",
          "/images/services/dexa/3.jpg",
        ],
      },

      {
        id: "opg",
        shortTitle: "OPG",
        title: "OPG Dental X-Ray",
        short: "Comprehensive panoramic dental imaging services.",
        image: "/images/services/opg/main.jpg",
        description:
          "Digital panoramic dental imaging for complete jaw and dental assessment.",
        benefits: [
          "Panoramic Imaging",
          "Quick Procedure",
          "Low Radiation",
          "Clear Digital Reports",
        ],
        uses: [
          "Dental Assessment",
          "Jaw Evaluation",
          "Orthodontic Planning",
        ],
        preparation: [
          "Remove metallic dental accessories if advised",
        ],
        gallery: [
          "/images/services/opg/1.jpg",
          "/images/services/opg/2.jpg",
          "/images/services/opg/3.jpg",
        ],
      },
    ],
  },

  {
    category: "Cardiology",
    services: [
      {
        id: "ecg",
        shortTitle: "ECG",
        title: "ECG Test",
        short: "Advanced ECG monitoring and cardiac diagnostics.",
        image: "/images/services/ecg/main.jpg",
        description:
          "Electrocardiogram testing for accurate heart rhythm and cardiac assessment.",
        benefits: [
          "Quick Procedure",
          "Heart Monitoring",
          "Accurate Results",
          "Non-invasive Test",
        ],
        uses: [
          "Heart Rhythm Analysis",
          "Chest Pain Evaluation",
          "Cardiac Monitoring",
        ],
        preparation: [
          "Carry previous cardiac reports",
        ],
        gallery: [
          "/images/services/ecg/1.jpg",
          "/images/services/ecg/2.jpg",
          "/images/services/ecg/3.jpg",
        ],
      },

      {
        id: "echo",
        shortTitle: "ECHO",
        title: "Echocardiography",
        short: "Advanced heart ultrasound and cardiac assessment.",
        image: "/images/services/echo/main.jpg",
        description:
          "Echocardiography services for evaluating heart structure and cardiac function.",
        benefits: [
          "Non-invasive Procedure",
          "Real-time Heart Imaging",
          "Accurate Diagnosis",
          "Safe Technology",
        ],
        uses: [
          "Heart Function Analysis",
          "Valve Assessment",
          "Cardiac Evaluation",
        ],
        preparation: [
          "Carry previous cardiac reports",
        ],
        gallery: [
          "/images/services/echo/1.jpg",
          "/images/services/echo/2.jpg",
          "/images/services/echo/3.jpg",
        ],
      },

      {
        id: "tmt",
        shortTitle: "TMT",
        title: "Treadmill Test",
        short: "Comprehensive stress testing and cardiac evaluation.",
        image: "/images/services/tmt/main.jpg",
        description:
          "Treadmill stress testing for evaluating heart performance during physical activity.",
        benefits: [
          "Cardiac Stress Analysis",
          "Accurate Monitoring",
          "Experienced Specialists",
          "Safe Procedure",
        ],
        uses: [
          "Heart Disease Evaluation",
          "Fitness Assessment",
          "Cardiac Monitoring",
        ],
        preparation: [
          "Wear comfortable clothing",
        ],
        gallery: [
          "/images/services/tmt/1.jpg",
          "/images/services/tmt/2.jpg",
          "/images/services/tmt/3.jpg",
        ],
      },
    ],
  },

  {
    category: "Neurology",
    services: [
      {
        id: "eeg",
        shortTitle: "EEG",
        title: "EEG Test",
        short: "Advanced neurological brain activity monitoring.",
        image: "/images/services/eeg/main.jpg",
        description:
          "Electroencephalography testing for monitoring brain electrical activity.",
        benefits: [
          "Brain Activity Monitoring",
          "Safe Procedure",
          "Accurate Analysis",
          "Experienced Neurologists",
        ],
        uses: [
          "Seizure Evaluation",
          "Brain Disorder Diagnosis",
          "Neurological Assessment",
        ],
        preparation: [
          "Wash hair before test",
        ],
        gallery: [
          "/images/services/eeg/1.jpg",
          "/images/services/eeg/2.jpg",
          "/images/services/eeg/3.jpg",
        ],
      },

      {
        id: "emg",
        shortTitle: "EMG",
        title: "EMG Test",
        short: "Advanced muscle and nerve function assessment.",
        image: "/images/services/emg/main.jpg",
        description:
          "Electromyography testing for evaluating muscle and nerve health.",
        benefits: [
          "Accurate Nerve Analysis",
          "Muscle Function Assessment",
          "Safe Procedure",
          "Reliable Reports",
        ],
        uses: [
          "Muscle Disorder Diagnosis",
          "Nerve Assessment",
          "Neuromuscular Evaluation",
        ],
        preparation: [
          "Avoid lotions before test",
        ],
        gallery: [
          "/images/services/emg/1.jpg",
          "/images/services/emg/2.jpg",
          "/images/services/emg/3.jpg",
        ],
      },

      {
        id: "ncv",
        shortTitle: "NCV",
        title: "NCV Test",
        short: "Advanced nerve conduction diagnostic services.",
        image: "/images/services/ncv/main.jpg",
        description:
          "Nerve conduction velocity testing for accurate nerve function analysis.",
        benefits: [
          "Precise Nerve Analysis",
          "Quick Procedure",
          "Safe Technology",
          "Reliable Reports",
        ],
        uses: [
          "Peripheral Neuropathy",
          "Nerve Injury Assessment",
          "Neurological Diagnosis",
        ],
        preparation: [
          "Carry previous neurological reports",
        ],
        gallery: [
          "/images/services/ncv/1.jpg",
          "/images/services/ncv/2.jpg",
          "/images/services/ncv/3.jpg",
        ],
      },
    ],
  },

  {
    category: "Gastroenterology",
    services: [
      {
        id: "endoscopy",
        shortTitle: "Endoscopy",
        title: "Endoscopy",
        short: "Advanced digestive tract diagnostic procedures.",
        image: "/images/services/endoscopy/main.jpg",
        description:
          "Endoscopy services for evaluating digestive tract conditions and abnormalities.",
        benefits: [
          "Minimally Invasive",
          "Accurate Diagnosis",
          "Experienced Specialists",
          "Modern Equipment",
        ],
        uses: [
          "Digestive Disorder Evaluation",
          "Stomach Examination",
          "Upper GI Assessment",
        ],
        preparation: [
          "Fasting required before procedure",
        ],
        gallery: [
          "/images/services/endoscopy/1.jpg",
          "/images/services/endoscopy/2.jpg",
          "/images/services/endoscopy/3.jpg",
        ],
      },

      {
        id: "colonoscopy",
        shortTitle: "Colonoscopy",
        title: "Colonoscopy",
        short: "Comprehensive colon and rectal examination services.",
        image: "/images/services/colonoscopy/main.jpg",
        description:
          "Colonoscopy procedures for detailed evaluation of colon and intestinal health.",
        benefits: [
          "Detailed Internal Imaging",
          "Early Detection",
          "Accurate Diagnosis",
          "Expert Specialists",
        ],
        uses: [
          "Colon Cancer Screening",
          "Intestinal Evaluation",
          "Digestive Disorder Assessment",
        ],
        preparation: [
          "Bowel preparation required before test",
        ],
        gallery: [
          "/images/services/colonoscopy/1.jpg",
          "/images/services/colonoscopy/2.jpg",
          "/images/services/colonoscopy/3.jpg",
        ],
      },
    ],
  },

  {
    category: "Laboratory & Pathology",
    services: [
      {
        id: "pathology",
        shortTitle: "Pathology",
        title: "Pathology Laboratory",
        short: "Advanced pathology and laboratory testing services.",
        image: "/images/services/pathology/main.jpg",
        description:
          "Comprehensive pathology and diagnostic laboratory testing with accurate reporting.",
        benefits: [
          "Accurate Testing",
          "Fast Reports",
          "Modern Laboratory",
          "Experienced Specialists",
        ],
        uses: [
          "Blood Testing",
          "Biochemistry",
          "Clinical Pathology",
        ],
        preparation: [
          "Fasting may be required for some tests",
        ],
        gallery: [
          "/images/services/pathology/1.jpg",
          "/images/services/pathology/2.jpg",
          "/images/services/pathology/3.jpg",
        ],
      },

      {
        id: "fnac",
        shortTitle: "FNAC",
        title: "FNAC",
        short: "Fine needle aspiration cytology diagnostic services.",
        image: "/images/services/fnac/main.jpg",
        description:
          "FNAC testing for evaluating lumps, swellings, and tissue abnormalities.",
        benefits: [
          "Minimally Invasive",
          "Quick Procedure",
          "Accurate Results",
          "Safe Technique",
        ],
        uses: [
          "Tumor Evaluation",
          "Lump Assessment",
          "Cancer Screening",
        ],
        preparation: [
          "Carry previous medical reports",
        ],
        gallery: [
          "/images/services/fnac/1.jpg",
          "/images/services/fnac/2.jpg",
          "/images/services/fnac/3.jpg",
        ],
      },

      {
        id: "histopathology",
        shortTitle: "Histo",
        title: "Histopathology",
        short: "Advanced tissue examination and diagnostic analysis.",
        image: "/images/services/histopathology/main.jpg",
        description:
          "Histopathology services for tissue examination and disease diagnosis.",
        benefits: [
          "Detailed Tissue Analysis",
          "Accurate Diagnosis",
          "Experienced Pathologists",
          "Reliable Reports",
        ],
        uses: [
          "Cancer Diagnosis",
          "Biopsy Analysis",
          "Disease Detection",
        ],
        preparation: [
          "Carry biopsy samples as advised",
        ],
        gallery: [
          "/images/services/histopathology/1.jpg",
          "/images/services/histopathology/2.jpg",
          "/images/services/histopathology/3.jpg",
        ],
      },

      {
        id: "cytology",
        shortTitle: "Cytology",
        title: "Cytology",
        short: "Advanced cellular analysis and diagnostic testing.",
        image: "/images/services/cytology/main.jpg",
        description:
          "Cytology testing for examining cells and detecting abnormalities.",
        benefits: [
          "Cellular Analysis",
          "Early Detection",
          "Accurate Results",
          "Safe Procedure",
        ],
        uses: [
          "Cancer Screening",
          "Fluid Analysis",
          "Cell Examination",
        ],
        preparation: [
          "Carry previous pathology reports",
        ],
        gallery: [
          "/images/services/cytology/1.jpg",
          "/images/services/cytology/2.jpg",
          "/images/services/cytology/3.jpg",
        ],
      },
    ],
  },
];

export default serviceCategories;

