const mathQuizData = {

    adaptiveThreshold: 15,

    // Module 1 — 22 Questions
    module1: [
        {
            id: 1,
            type: "multiple-choice",
            question: "Which of the following expressions is equivalent to (3x − 2)(5x − 2)?",
            options: [
                "A) 8x − 4",
                "B) 15x² + 4",
                "C) 15x² − 16x − 4",
                "D) 15x² − 16x + 4"
            ],
            correctAnswer: "D"
        },
        {
            id: 2,
            type: "multiple-choice",
            question: "Data from two groups are shown in the table. Which of the following is a true statement about the mean of the values for Group 1 and the mean of the values for Group 2?",
            table: {
                headers: ["Group 1", "Group 2"],
                rows: [
                    [6, 2],
                    [14, 6],
                    [14, 14],
                    [21, 14],
                    [21, 21]
                ]
            },
            options: [
                "A) The mean of Group 1 is greater than the mean for Group 2.",
                "B) The mean of Group 2 is greater than the mean for Group 1.",
                "C) The means of the two groups are equal.",
                "D) There is not enough information to compare the means."
            ],
            correctAnswer: "A"
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "The given equation models the cost, c, in dollars, to rent a car for d days. If the cost is $345, how many days long is the rental?",
            equation: "c = 120 + 75d",
            options: [
                "A) 3",
                "B) 75",
                "C) 354",
                "D) 25,995"
            ],
            correctAnswer: "A"
        },
        {
            id: 4,
            type: "multiple-choice",
            question: "The measure of angle B in triangle ABC is 32°, and the measure of angle C is 77°. What is the measure of angle A?",
            options: [
                "A) 45°",
                "B) 71°",
                "C) 109°",
                "D) 251°"
            ],
            correctAnswer: "B"
        },
        {
            id: 5,
            type: "student-produced",
            question: "If x/y = 3, what is the value of 12y/x?",
            correctAnswer: "4"
        },
        {
            id: 6,
            type: "multiple-choice",
            question: "If (x, y) is the solution to the given system of equations, what is the value of x − y?",
            equation: "3x − 5y = −17\n5x − 3y = −7",
            options: [
                "A) −24",
                "B) −10",
                "C) −3",
                "D) 10"
            ],
            correctAnswer: "C"
        },
        {
            id: 7,
            type: "multiple-choice",
            question: "A bank president hopes to attract more customers by opening a total of n new branches each year. The bank had b branches at the beginning of 2023. Which function best models the total number of branches, T, that the bank plans to have y years after 2023?",
            options: [
                "A) T(y) = ny − b",
                "B) T(y) = ny + b",
                "C) T(y) = b(n)ʸ",
                "D) T(y) = n(b)ʸ"
            ],
            correctAnswer: "B"
        },
        {
            id: 8,
            type: "student-produced",
            question: "What is the negative solution to the equation x² − 30 = x?",
            correctAnswer: "-5"
        },
        {
            id: 9,
            type: "multiple-choice",
            question: "The line y = cx − 2, where c is a constant, is graphed in the xy-plane. If the line contains the point (m, n), where m ≠ 0 and n ≠ 0, what is the slope of the line, in terms of m and n?",
            options: [
                "A) (2 − m) / n",
                "B) (2 − n) / m",
                "C) (m + 2) / n",
                "D) (n + 2) / m"
            ],
            correctAnswer: "D"
        },
        {
            id: 10,
            type: "multiple-choice",
            question: "Which of the following could be the equation of the graph shown?",
            figure: "question10_graph",
            options: [
                "A) y = −x(x − 1)(x + 2)",
                "B) y = −x(x + 1)(x − 2)",
                "C) y = −x(x − 1)²(x + 2)",
                "D) y = −x(x + 1)²(x − 2)"
            ],
            correctAnswer: "C"
        },
        {
            id: 11,
            type: "multiple-choice",
            question: "Juan is a book editor who is given a book to edit. The number of pages that he has left to edit at the end of each hour is estimated by the equation P = 326 − 12h, where h represents the number of hours spent editing the book. What is the best interpretation of the value 326 in this equation?",
            options: [
                "A) Juan edits pages at a rate of 326 per day.",
                "B) Juan edits pages at a rate of 326 per hour.",
                "C) Juan will finish editing the book in 326 hours.",
                "D) Juan is given a total of 326 pages to edit."
            ],
            correctAnswer: "D"
        },
        {
            id: 12,
            type: "multiple-choice",
            question: "A triangle has an area of 20 square units, a base of b units, and a height of (b + 3) units. Which of the following is the value of b?",
            options: [
                "A) 5",
                "B) 8",
                "C) 13",
                "D) 40"
            ],
            correctAnswer: "A"
        },
        {
            id: 13,
            type: "multiple-choice",
            question: "In the given system of equations, c is a constant and x and y are variables. For what value of c will the system of equations have no solution?",
            equation: "3x − 2y = 5\ncx − 7y = 12",
            options: [
                "A) −21/2",
                "B) −36/5",
                "C) 36/5",
                "D) 21/2"
            ],
            correctAnswer: "D"
        },
        {
            id: 14,
            type: "multiple-choice",
            question: "The scatterplot shows the relationship for employees in a particular field between the number of work hours per week spent on creative tasks and their overall job satisfaction. Which of the following is the best approximation of the job satisfaction of an employee who spends 12 hours a week on creative tasks, based on the line of best fit?",
            figure: "question14_scatterplot",
            options: [
                "A) 68%",
                "B) 75%",
                "C) 80%",
                "D) 84%"
            ],
            correctAnswer: "B"
        },
        {
            id: 15,
            type: "student-produced",
            question: "Lines l, m, and o intersect as shown in the figure. What is the value of c?",
            figure: "question15_diagram",
            correctAnswer: "117"
        },
        {
            id: 16,
            type: "multiple-choice",
            question: "The function p describes the population of a community. Each successive year, the population of the community increases by 3% of the previous year's population. Which of the following could describe this function?",
            options: [
                "A) Decreasing exponential",
                "B) Decreasing linear",
                "C) Increasing exponential",
                "D) Increasing linear"
            ],
            correctAnswer: "C"
        },
        {
            id: 17,
            type: "student-produced",
            question: "The population of a small town is currently 800. A statistician estimates that the population of the town will decline by 14 percent per year for the next five years. The statistician models the population, P, of the town after x years using the equation P = 800(k)ˣ. According to the model, what will the population of the town be, to the nearest whole number, after five years?",
            correctAnswer: "376"
        },
        {
            id: 18,
            type: "multiple-choice",
            question: "In the triangle shown, sin(c°) = cos(d°). If c = 6m − 9 and d = 8m − 6, what is the value of m?",
            figure: "question18_triangle",
            options: [
                "A) 5.4",
                "B) 7.5",
                "C) 10.5",
                "D) 13.5"
            ],
            correctAnswer: "B"
        },
        {
            id: 19,
            type: "multiple-choice",
            question: "In the xy-plane, line l passes through the origin and contains points (4, r) and (r, 16). Which of the following could be the value of r?",
            options: [
                "A) 0",
                "B) 4",
                "C) 8",
                "D) 12"
            ],
            correctAnswer: "C"
        },
        {
            id: 20,
            type: "multiple-choice",
            question: "In a zoological study, Eastern chinchillas produced 30 percent more offspring than did Western chinchillas. If the Eastern chinchillas in this study produced 143 offspring, how many offspring did the Western chinchillas produce?",
            options: [
                "A) 100",
                "B) 103",
                "C) 110",
                "D) 186"
            ],
            correctAnswer: "C"
        },
        {
            id: 21,
            type: "student-produced",
            question: "When graphed in the xy-plane, the solution set of the given system of inequalities contains the point (j, k). What is the greatest possible value of k?",
            equation: "y ≤ 20x + 350\ny ≤ −8x",
            correctAnswer: "100"
        },
        {
            id: 22,
            type: "multiple-choice",
            question: "In the given system of equations, r and s are constants. For which of the following values of r and s does the system have exactly two real solutions?",
            equation: "y = rx² + s\ny = −2",
            options: [
                "A) r = −2, s = −1",
                "B) r = −1, s = −2",
                "C) r = 2, s = −2",
                "D) r = 3, s = 1"
            ],
            correctAnswer: "A"
        }
    ],

    // Module 2 (Easier) — 22 Questions
    module2Easy: [
        {
            id: 1,
            type: "multiple-choice",
            question: "In a class of 27 students, 8 students were absent yesterday and the rest were present. How many students in the class were present yesterday?",
            options: [
                "A) 8",
                "B) 9",
                "C) 19",
                "D) 27"
            ],
            correctAnswer: "C"
        },
        {
            id: 2,
            type: "multiple-choice",
            question: "The table shows the number of marbles of different colors and sizes in a bag of 50 marbles. If a marble is chosen from the bag at random, what is the probability that it is a large blue marble?",
            table: {
                headers: ["Size", "Red", "Blue", "Total"],
                rows: [
                    ["Small", "16", "6", "22"],
                    ["Large", "7", "21", "28"],
                    ["Total", "23", "27", "50"]
                ]
            },
            options: [
                "A) 21/50",
                "B) 27/50",
                "C) 21/28",
                "D) 21/27"
            ],
            correctAnswer: "A"
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "The partial graph of a function is shown. Which of the following is the y-intercept of the graph?",
            figure: "module2_easy_q3_graph",
            options: [
                "A) (-6,0)",
                "B) (-3,0)",
                "C) (0,-7)",
                "D) (0,-5)"
            ],
            correctAnswer: "D"
        },
        {
            id: 4,
            type: "student-produced",
            question: "The line graph shows a home's heating bill from January through June. What is the median bill amount, in dollars, for the six months shown?",
            figure: "module2_easy_q4_linegraph",
            correctAnswer: "40"
        },
        {
            id: 5,
            type: "student-produced",
            question: "The function f is defined by f(x) = √(x − 1) − 4. For what value of x does f(x) = 0?",
            correctAnswer: "17"
        },
        {
            id: 6,
            type: "multiple-choice",
            question: "David has a mobile data plan for which the monthly fee is $20.00 and the data usage fee is $2.50 per gigabyte. Which of the following functions expresses David's cost, in dollars, for a month in which he uses g gigabytes of data?",
            options: [
                "A) f(g) = 22.50g",
                "B) f(g) = 20g + 2.50",
                "C) f(g) = 20 + 250g",
                "D) f(g) = 20 + 2.50g"
            ],
            correctAnswer: "D"
        },
        {
            id: 7,
            type: "multiple-choice",
            question: "If (y + 2) / 5 = c and c = 4, what is the value of y?",
            options: [
                "A) 16",
                "B) 18",
                "C) 20",
                "D) 22"
            ],
            correctAnswer: "B"
        },
        {
            id: 8,
            type: "student-produced",
            question: "A worker at a shoe factory boxes 8 pairs of shoes per minute. At this rate, how long, in minutes, will it take the worker to box 168 pairs of shoes?",
            correctAnswer: "21"
        },
        {
            id: 9,
            type: "multiple-choice",
            question: "If 6x − 4 is 11 less than 25, what is the value of 9x?",
            options: [
                "A) 3",
                "B) 8",
                "C) 18",
                "D) 27"
            ],
            correctAnswer: "D"
        },
        {
            id: 10,
            type: "multiple-choice",
            question: "Some values of the linear function g are shown in the table. Which of the following defines g?",
            table: {
                headers: ["x", "g(x)"],
                rows: [
                    ["2", "11"],
                    ["4", "17"],
                    ["6", "23"]
                ]
            },
            options: [
                "A) g(x) = 2x + 7",
                "B) g(x) = 3x + 5",
                "C) g(x) = 4x + 3",
                "D) g(x) = 5x + 1"
            ],
            correctAnswer: "B"
        },
        {
            id: 11,
            type: "student-produced",
            question: "In the figure shown, lines m and n are parallel and are intersected by line b. What is the value of a?",
            figure: "module2_easy_q11_diagram",
            correctAnswer: "135"
        },
        {
            id: 12,
            type: "multiple-choice",
            question: "Which expression is equivalent to (3y² − 2) − (−5y² + 3y − 6)?",
            options: [
                "A) −2y² + 3y − 4",
                "B) −2y² − 3y − 4",
                "C) 8y² + 3y − 4",
                "D) 8y² − 3y + 4"
            ],
            correctAnswer: "D"
        },
        {
            id: 13,
            type: "multiple-choice",
            question: "In the xy-plane, the graph of which of the following equations is perpendicular to the graph of the given equation?",
            equation: "-3x + 4y = 5",
            options: [
                "A) 3x + 6y = 5",
                "B) 3x + 8y = 2",
                "C) 4x + 3y = 5",
                "D) 4x + 6y = 5"
            ],
            correctAnswer: "C"
        },
        {
            id: 14,
            type: "multiple-choice",
            question: "The line graph shows the total price, P, in dollars, to rent a car for d days. What does the slope of the graph represent?",
            figure: "module2_easy_q14_linegraph",
            options: [
                "A) The average increase in price to rent a car for each additional day",
                "B) The total number of days for which a car is rented",
                "C) The total number of cars rented",
                "D) The initial cost of renting a car"
            ],
            correctAnswer: "A"
        },
        {
            id: 15,
            type: "student-produced",
            question: "In the xy-plane, the graph of y = 4x² − 23x intersects the graph of y = x at the points (0,0) and (c,c). What is the value of c?",
            correctAnswer: "6"
        },
        {
            id: 16,
            type: "multiple-choice",
            question: "Given the right triangle PQR in the figure, which of the following is equal to x / y?",
            figure: "module2_easy_q16_triangle",
            options: [
                "A) cos(P)",
                "B) cos(Q)",
                "C) tan(P)",
                "D) tan(Q)"
            ],
            correctAnswer: "C"
        },
        {
            id: 17,
            type: "multiple-choice",
            question: "The frequency table shows the distribution of randomly selected integers from 1 to 12. What is the mean of the integers?",
            table: {
                headers: ["Integer", "Frequency"],
                rows: [
                    ["4", "4"],
                    ["5", "1"],
                    ["6", "1"],
                    ["7", "1"],
                    ["9", "2"],
                    ["11", "1"]
                ]
            },
            options: [
                "A) 4.2",
                "B) 6.3",
                "C) 7.0",
                "D) 10.6"
            ],
            correctAnswer: "B"
        },
        {
            id: 18,
            type: "multiple-choice",
            question: "The scatterplot shows the relationship between x and y. Which of the following equations best models the data shown?",
            figure: "module2_easy_q18_scatterplot",
            options: [
                "A) y = −2.138x² − 38.44x − 483.27",
                "B) y = −2.138x² − 38.44x + 483.27",
                "C) y = 2.138x² − 38.44x + 483.27",
                "D) y = 2.138x² + 38.44x − 483.27"
            ],
            correctAnswer: "C"
        },
        {
            id: 19,
            type: "multiple-choice",
            question: "The given equation relates the numbers s, t, and v. Which equation correctly expresses v in terms of s and t?",
            equation: "s = −8t² + vt",
            options: [
                "A) v = s/t + 8t",
                "B) v = (s + 8)/t",
                "C) v = s − 8t",
                "D) v = s/t − 8t"
            ],
            correctAnswer: "A"
        },
        {
            id: 20,
            type: "multiple-choice",
            question: "The weight w, in grams, of a newborn panda can be approximated with the equation w = 109(1.12)ⁿ where n represents the number of days since birth. Which of the following equations models the weight, in grams, of a newborn panda x weeks after the panda is born?",
            options: [
                "A) w = 109(1.12)^(x/7)",
                "B) w = 109(1.12)^(7x)",
                "C) w = 109(1.84)ˣ",
                "D) w = 109(2.21)^(x/7)"
            ],
            correctAnswer: "B"
        },
        {
            id: 21,
            type: "multiple-choice",
            question: "In quadrilateral LMNO shown, what is the length of LM?",
            figure: "module2_easy_q21_quadrilateral",
            options: [
                "A) 4",
                "B) 4√2",
                "C) 4√3",
                "D) 8"
            ],
            correctAnswer: "B"
        },
        {
            id: 22,
            type: "student-produced",
            question: "If (a, 0) is a solution to the equation x³(x² − 10) = −9x, what is the least possible value of a?",
            correctAnswer: "-3"
        }
    ],

    // Module 2 (Harder) — 22 Questions
    module2Hard: [
        {
            id: 1,
            type: "multiple-choice",
            question: "A doctor selects a random sample of the residents of an island and finds that 0.8% of the selected residents have a specific gene mutation. Based on these results, approximately how many of the island's 15,000 residents likely have this mutation?",
            options: [
                "A) 75",
                "B) 90",
                "C) 105",
                "D) 120"
            ],
            correctAnswer: "D"
        },
        {
            id: 2,
            type: "student-produced",
            question: "If 3(4k − 10) − (26 + 5k) = 21, what is the value of 4k?",
            correctAnswer: "44"
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "The function f is defined by f(x) = 100 + 10x. For what value of x does f(x) = 200?",
            options: [
                "A) 8",
                "B) 9",
                "C) 10",
                "D) 11"
            ],
            correctAnswer: "C"
        },
        {
            id: 4,
            type: "multiple-choice",
            question: "In the figure, lines a and b are parallel and lines k and l are parallel. If x = 75, what is the value of y?",
            figure: "module2_hard_q4_parallellines",
            options: [
                "A) 15",
                "B) 75",
                "C) 105",
                "D) 165"
            ],
            correctAnswer: "C"
        },
        {
            id: 5,
            type: "student-produced",
            question: "The point (4, 3) lies on the graph of the function b(x) in the xy-plane. If b(x) = (1/2)x² − a, where a is a constant, what is the value of a?",
            correctAnswer: "5"
        },
        {
            id: 6,
            type: "multiple-choice",
            question: "A grocery store receives a shipment of oranges and consistently sells the same number of oranges each day. The given equation models the number of oranges, y, that remain x days after the shipment is received. What does it mean that (7, 0) is a solution to the equation?",
            equation: "65x + y = 455",
            options: [
                "A) It takes 7 days after the shipment until none of the oranges are remaining.",
                "B) There are 7 oranges in the shipment.",
                "C) It takes 7 days for oranges to be sold to 455 customers.",
                "D) After the shipment, 7 oranges are sold each day."
            ],
            correctAnswer: "A"
        },
        {
            id: 7,
            type: "multiple-choice",
            question: "The given equation relates the positive integers v and w. Which of the following equations correctly expresses w in terms of v?",
            equation: "v + 3w = 30",
            options: [
                "A) w = (1/3)(30 − v)",
                "B) w = (1/3)(30) − v",
                "C) w = (1/3)(30 + v)",
                "D) w = (1/3)(30) + v"
            ],
            correctAnswer: "A"
        },
        {
            id: 8,
            type: "multiple-choice",
            question: "Angle D of triangle DEF is a right angle, and sin(E) = 63/65. What is the value of sin(F)?",
            options: [
                "A) 16/65",
                "B) 16/63",
                "C) 63/65",
                "D) 65/63"
            ],
            correctAnswer: "A"
        },
        {
            id: 9,
            type: "student-produced",
            question: "The table shows all 5 values in Data Set 1 and all 5 values in Data Set 2. The mean of Data Set 1 is 0.3 greater than the mean of Data Set 2. What is the value of h?",
            table: {
                headers: ["Data Set 1", "Data Set 2"],
                rows: [
                    ["3.9", "h"],
                    ["6.1", "4.5"],
                    ["4.4", "5.7"],
                    ["5.3", "4.2"],
                    ["5.8", "3.8"]
                ]
            },
            correctAnswer: "5.8"
        },
        {
            id: 10,
            type: "multiple-choice",
            question: "When function g is graphed in the xy-plane, it has x-intercepts at 4, 2, and −4. The graph of y = b(x) is the result of translating the graph of y = g(x) to the right 3 units. Which of the following could define function b?",
            options: [
                "A) b(x) = (x − 7)(x − 5)(x + 1)",
                "B) b(x) = (x − 7)(x + 5)(x − 1)",
                "C) b(x) = (x + 7)(x − 5)(x − 1)",
                "D) b(x) = (x + 7)(x + 1)(x − 1)"
            ],
            correctAnswer: "A"
        },
        {
            id: 11,
            type: "multiple-choice",
            question: "If y = 1/x³, which of the following gives x in terms of y?",
            options: [
                "A) x = y^(1/3)",
                "B) x = y^(-1/3)",
                "C) x = -y³",
                "D) x = y³"
            ],
            correctAnswer: "B"
        },
        {
            id: 12,
            type: "multiple-choice",
            question: "What is the product of all values of x that satisfy the given equation?",
            equation: "3(x² + 4) = 18x",
            options: [
                "A) 3",
                "B) 4",
                "C) 3√5",
                "D) 6√5"
            ],
            correctAnswer: "B"
        },
        {
            id: 13,
            type: "multiple-choice",
            question: "In the system of equations shown, c is a constant and x and y are variables. For what value of c will the system of equations have no solution?",
            equation: "cx − 6y = 8\n3x − 7y = 5",
            options: [
                "A) −24/5",
                "B) −18/7",
                "C) 18/7",
                "D) 24/5"
            ],
            correctAnswer: "C"
        },
        {
            id: 14,
            type: "multiple-choice",
            question: "The function C gives the cost, in dollars, of manufacturing x units of a product. How will the cost of manufacturing change if 5 additional units of the product are manufactured?",
            equation: "C(x) = 3x + 75",
            options: [
                "A) The cost will increase by $3.",
                "B) The cost will increase by $15.",
                "C) The cost will increase by $75.",
                "D) The cost will increase by $375."
            ],
            correctAnswer: "B"
        },
        {
            id: 15,
            type: "student-produced",
            question: "At a music school, each long session lasts twenty minutes longer than each short session. If 3 long sessions and 4 short sessions last a total of 270 minutes, how many minutes does a long session last?",
            correctAnswer: "50"
        },
        {
            id: 16,
            type: "multiple-choice",
            question: "One of the factors of the given equation can be written as (x − k). What is the greatest possible value of k?",
            equation: "x³ − 4x² + 3x = 0",
            options: [
                "A) −3",
                "B) −1",
                "C) 1",
                "D) 3"
            ],
            correctAnswer: "D"
        },
        {
            id: 17,
            type: "student-produced",
            question: "An elementary school had k kindergarten students enrolled at the beginning of the 2011 school year. The number of kindergarten students enrolled tripled each year until 2014, when the elementary school had 540 kindergarten students enrolled. What is the value of k?",
            correctAnswer: "20"
        },
        {
            id: 18,
            type: "multiple-choice",
            question: "Glucose, which is an important component of growth media for cultured cells, is so energy rich that 1 milliliter can feed up to 9 Petri dishes of cells. If a Petri dish has an area of approximately 7 (1/4) square centimeters, about how many square centimeters of cells could 115 milliliters of glucose feed?",
            options: [
                "A) 140",
                "B) 1,000",
                "C) 6,500",
                "D) 7,500"
            ],
            correctAnswer: "D"
        },
        {
            id: 19,
            type: "multiple-choice",
            question: "A time capsule is constructed from two rectangular pyramids and a rectangular prism with measurements indicated in the figure. Of the following, which is the closest to the volume of the time capsule, in cubic inches?",
            figure: "module2_hard_q19_timecapsule",
            options: [
                "A) 426",
                "B) 960",
                "C) 1,173",
                "D) 1,386"
            ],
            correctAnswer: "C"
        },
        {
            id: 20,
            type: "student-produced",
            question: "Function f is defined by the given equation, where c and d are constants. When graphed in the xy-plane, y = f(x) + 8 has a y-intercept at (0, 2.9). The sum of c and d is 8.4. What is the value of c?",
            equation: "f(x) = cˣ − d",
            correctAnswer: "2.3"
        },
        {
            id: 21,
            type: "multiple-choice",
            question: "The line graph shows the average mass of plants grown in a greenhouse during the first 10 days after the seeds germinated. According to the graph, approximately how much less, in milligrams, is the total mass of 4 plants that germinated 4 days ago than the total mass of 3 plants that germinated 8 days ago?",
            figure: "module2_hard_q21_linegraph",
            options: [
                "A) 6.0",
                "B) 8.0",
                "C) 9.6",
                "D) 32.2"
            ],
            correctAnswer: "D"
        },
        {
            id: 22,
            type: "multiple-choice",
            question: "A partial graph of y = g(x) is shown. Function g is defined by the equation g(x) = c / (x − d) where c and d are constants. If b(x) = g(x − 3), which equation could define function b?",
            figure: "module2_hard_q22_graph",
            options: [
                "A) b(x) = 12 / (x + 7)",
                "B) b(x) = 12 / (x + 1)",
                "C) b(x) = 12 / (x − 3)",
                "D) b(x) = 12(x − 3) / (x − 3)"
            ],
            correctAnswer: "B"
        }
    ]
};

// Convenient aliases to ensure compatibility with different naming formats
mathQuizData.module2_easy = mathQuizData.module2Easy;
mathQuizData.module2_hard = mathQuizData.module2Hard;


/**
 * Evaluates student performance on Math Module 1
 * and returns the score and target Module 2.
 *
 * @param {Object} userAnswers
 * Key-value map of question IDs to selected answers.
 *
 * @returns {Object} Result object containing:
 * - module1Score
 * - totalQuestions
 * - percentage
 * - assignedModuleType
 * - nextModuleQuestions
 */
function evaluateMathModule1(userAnswers) {

    let score = 0;

    mathQuizData.module1.forEach(q => {

        const userAnswer = userAnswers[q.id];

        if (!userAnswer) {
            return;
        }

        const normalizedUserAnswer =
            String(userAnswer).trim().toUpperCase();

        const normalizedCorrectAnswer =
            String(q.correctAnswer).trim().toUpperCase();

        if (normalizedUserAnswer === normalizedCorrectAnswer) {
            score++;
        }
    });

    const routedModule =
        score >= mathQuizData.adaptiveThreshold
            ? mathQuizData.module2Hard
            : mathQuizData.module2Easy;

    return {
        module1Score: score,
        totalQuestions: mathQuizData.module1.length,
        percentage: (score / mathQuizData.module1.length) * 100,
        assignedModuleType:
            score >= mathQuizData.adaptiveThreshold
                ? "Harder"
                : "Easier",
        nextModuleQuestions: routedModule
    };
}


// Export for Node environments if applicable
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        mathQuizData,
        evaluateMathModule1
    };
}