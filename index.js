const taskinput = document.getElementById("inputText");//اخذنا العنصر من الانبوت بوكس وما حطيت فايلو عشان بدي احولو لتشيك بوكس مو سترينج
//وحطينا كونست عشان ما بدنا نعدل عليه
const taskaddbotton = document.getElementById("buttonaddid");// اخذنا اسم الكبسة عشان نستعملها 
const taskcontainer = document.getElementById("taskarea");// اخذنا المكان اللي بدنا نضيف فيه المهام عشان نستعملو
taskaddbotton.addEventListener("click",
    function () {
        const tasktext = taskinput.value.trim();// التريم عشان نشيل المسافات من البداية والنهاية
        if (tasktext === "")
            return;// اذا المستخدم ما ادخل نص لا تعمل اشي
        const taskdiv = document.createElement("div");// يعني انشئ عنصر اتش تي ام ال جديد من نوع ديف ورح نستخدمه عن طريق التاسك ديف
        // وما استعملنا دوكيومنت دوت رايت لانو الدوكيومنت دوت رايت رح تعمل مباشرة اثناء تحميل الصفحة 
        const checkboxj = document.createElement("input");// انشاء عنصر اتش تي ام ال نوع انبوت  ورح نقدر نستعمله من اسم تشيك بوكس
        // علمناه انبوت لانو الذاكرة بتخزن الانبوت بدون نوع ورح نحدد نوعها بعدين بتشيك بوكس
        const textspan = document.createElement("span");//انشاء عنصر في اتش تي ام ال من نوع سبان ورح نستخدمه من  اسم تكست سبان
        textspan.classList.add("spantextcss");
        const deletetask = document.createElement("button");// انشاء عنصر اتش تي ام ال وهو عبارة عن كبسة ورح استخدمه عن طريق ديليت تاسك
        deletetask.classList.add("deletetaskcss");// اعطاء كلاس للزر عشان استخدمه بالسي اس اس
        deletetask.textContent = "🗑️";// المحتوى اللي رح يظهر بالكبسة 
        //رح نستخدم السبان لعرض النص بجانب التشيك بوكس
        // ملاحظة هذول الثلاث تخزنو بالذاكرة
        checkboxj.type = "checkbox";// تحديد نوع التشيك بوكس جي انها تشيك بوكس وليست انبوت
        textspan.textContent = tasktext;// معناها حط النص اللي ادخل المستخدم بالتيكست كونتينت الخاص بالسبان
        taskdiv.appendChild(checkboxj);// يعني ضيف التشيك بوكس اللي عملناه بداخل الديف
        taskdiv.appendChild(textspan);// يعني ضيف السبان اللي عملناه بداخل الديف
        taskdiv.appendChild(deletetask);
        taskcontainer.appendChild(taskdiv);// ضفنا الديف اللي انشأناه بالمكان الخاص باضافة المهام
        deletetask.addEventListener("click", function () {
            taskcontainer.removeChild(taskdiv);// حذف ديف المطلوبة وحطينا الحدث هاض جوا حدث الانشاء عشان يتعرف عالديف اللي بدو يحذفها
        });
        inputText.value = "";
    })
//.addEventListener : يعني راقبلي العنصر
// click يعني لما تضغط
//function نفذ اللي بصير بهذا الفنقشن
//تعريف ثابت واعطائه القيمة السترينج اللي كتبو المستخدم
//راقب زر الإضافة، وعندما يضغط المستخدم عليه، خذ النص من حقل الإدخال.
// اللي رح يصير انو المستخدم بحط النص وبكبس الكبسة والنص رح يتخزن ب tasktext