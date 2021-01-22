// https://github.com/MdSakibAhmed/problem-solving-assignment


// kilometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer >= 0 && typeof kilometer == "number") {
        var meter = kilometer * 1000;

        return meter;
    } else {
        return "distance cannot be non-numeric value or negative value ";
    }
}

kilometerToMeter(10);


// budgetCalculator

function budgetCalculator(clock, phone, laptop) {
    //  check wheather the value numeric or not and positive or negative.
    if (
        typeof clock == "number" &&
        typeof phone == "number" &&
        typeof laptop == "number" &&
        phone >= 0 &&
        phone >= 0 &&
        laptop >= 0
    ) {
        var clockBudget = clock * 50;
        var phoneBudget = phone * 100;
        var laptopBudget = laptop * 500;
        var totalBudget = clockBudget + phoneBudget + laptopBudget;
        // Total budget of all clock,phone and laptop
        return totalBudget;
    } else {
        return "number of product cannot be non-numeric  or negative or less then three numbers.";
    }
}

budgetCalculator(2, 4, 5);


// hotelCost

function hotelCost(days) {
    var firstTenDays;
    var secondTenDays;
    var uptoTwentyDays;
    var totalCost;

    //  check wheather the value numeric or not and positive or negative.

    if (days >= 0 && typeof days == "number") {
        if (days <= 10) {
            firstTenDays = days * 100;
            totalCost = firstTenDays;

            return totalCost;

        } else if (days <= 20) {
            firstTenDays = 10 * 100;
            secondTenDays = (days - 10) * 80;
            totalCost = firstTenDays + secondTenDays;

            return totalCost;

        } else if (days > 20) {
            firstTenDays = 10 * 100;
            secondTenDays = 10 * 80;
            uptoTwentyDays = (days - 20) * 50;
            totalCost = firstTenDays + secondTenDays + uptoTwentyDays;

            return totalCost;
        }

    } else {
        return "number of days can not be non-numeric or negative";
    }
}

hotelCost(4);


// megaFriend

function megaFriend(friends) {

    //  check wheather the input value an array or not and empty array or not.
    if (Array.isArray(friends) && friends.length > 0) {
        var bigName = "";
        for (var i = 0; i < friends.length; i++) {
            var name = friends[i];

            // check wheather the array element is string or not
            if (typeof name == "string") {
                if (name.length > bigName.length) {
                    bigName = name;
                }
            } else {
                return "array element can not contain any non-string value like number etc";
            }
        }
        return bigName;
    } else {
        return "value can not be non-array or empty array";
    }
}

megaFriend("sakibb", "rakibbb", "ridwanhabib");