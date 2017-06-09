/**
 * 
 */

var app = angular.module("myapp" , ['ngStorage' , 'LocalStorageModule']);

app.controller("mycontroller" , function($scope ,localStorageService ,/*$localStorageService*/$localStorage )
		{
	
	//var storageType = localStorageService.getStorageType();
	
	//$localStorage.employeeList = $scope.employeeList;
	
	//Get the list of Employees from the local storage;
	 $scope.employeeList = localStorageService.get("employeeList");
	
	 $scope.currentEmployee;
	
	// on click of add employee button;
	$scope.createEmployee = function(flag)
	{
		$scope.shouldShow = flag;
		
		$scope.showBtnEdit=false;
		
		 $scope.name="";
		 $scope.designation="";
		 $scope.age="";
		 $scope.mobile="";
		 $scope.dob="";
		 $scope.email="";
		 $scope.address="";
	};
	
	
	// on click of submit;
	$scope.addEmployee = function()
	{
		
		// create an employee object with the entered details;
		$scope.employee = { name : $scope.name , age: $scope.age , designation: $scope.designation , dob: $scope.dob , mobile:$scope.mobile , email:$scope.email , address:$scope.address};
		
		// check if  any employess alrdy exists in the storage;
		if($scope.employeeList !=null && $scope.employeeList.length>0 )
			{
			
			
			for( var i=0 ; i< $scope.employeeList.length ; i++)
				{
				// check if the employee with the entered email already exists , if no then add and save ;
				if($scope.employeeList[i].email!= $scope.employee.email)
					{
					// append
					$scope.employeeList.push($scope.employee)
					// delete the previous data from the storage;
					// update the local storage;
					//$localStorage.employeeList = $scope.employeeList;
					localStorageService.set("employeeList" , $scope.employeeList);
					$scope.shouldShow = false;
					//$localStorage.apply();
					}
				else
					{
					// show message that user already exists;
					alert("Employee already exists with this email Id.");
					 console.log("user already exists");
					 $scope.shouldShow = false;
					}
				
				
				}
			
			
			}
		
		else
			{
			// create a list;
			$scope.employeeList =[];
			
			// add the employee to the list
			$scope.employeeList.push($scope.employee)
			// save
			localStorageService.set("employeeList" , $scope.employeeList);
			
			$scope.shouldShow = false;
			}
		
	
		
		
	};
	
	$scope.editEmployee = function(employee)
	{
		console.log(""+employee);
		if($scope.employeeList !=null)
			{
			$scope.shouldShow = true;
			$scope.showBtnEdit=true;
			$scope.currentEmployee=employee;
			$scope.name=employee.name;
			$scope.designation = employee.designation;
			$scope.age = +employee.age;
			$scope.dob = employee.dob;
			$scope.mobile = +employee.mobile;
			$scope.email = employee.email;
			$scope.address = employee.address;
			}
		
		
	};
	
	
	$scope.deleteEmployee = function(employee)
	{
		
		
		if(confirm("Are you sure you wanna delete this record?" , ""))
		if($scope.employeeList !=null)
			{
			var index = $scope.employeeList.indexOf(employee);
			$scope.employeeList.splice(index ,1);
			localStorageService.remove("employeeList");
			  console.log("Employee list removed");
			  
			  localStorageService.set("employeeList" , $scope.employeeList);
			}
	};
	
	
	// save the edited details and update the local storage;
	$scope.onEditEvent = function()
	{
		 
		 
		$scope.currentEmployee.name=$scope.name;
		$scope.currentEmployee.age=$scope.age;
		$scope.currentEmployee.mobile=$scope.mobile;
		$scope.currentEmployee.email=$scope.email;
		$scope.currentEmployee.dob=$scope.dob;
		$scope.currentEmployee.address=$scope.address;
		 $scope.currentEmployee.designation = $scope.designation
		  
		 var index = $scope.employeeList.indexOf( $scope.currentEmployee);
		  $scope.employeeList.splice(index ,1);
		  
			$scope.employeeList.push( $scope.currentEmployee)
		  
		  localStorageService.remove("employeeList");
		  console.log("Employee list removed");
		  
		  localStorageService.set("employeeList" , $scope.employeeList);
		  
		  $scope.shouldShow = false;
	}
	
	
	
		});



app.directive("allEmployees" , function()
		{
	
	return{
		
		
		restrict: 'A',
        scope:{
           
            	data : "=ngModel"
        },
		
        
        template: '<div  ng-model="data"></div>',
        
        	
        	//template : "<div> <table> <tr ng-repeat="x in scope.data"></tr> </table> </div>" 
     		
        
       /* template: "<table>" +
        		"<tr><th>Employee Name</th> <th>Age</th>  <th>Email</th></tr>"+
        		"<tr ng-repeat="x in data" ><td>x.name</td> " +
        				"<td>x.age</td> " +
        				"<td>x.email</td>" +
        				"</tr>"+
        		"</table>"
        
		*/
		 /*template : "<table>" +
		 		"<tr><th>Employee Name</th> <th>Age</th></tr>" +
		 		"<tr ng-repeat='x in $scope.employeeList'><td>x.name</td></tr>"+
		 		"</table>"*/
        
        link: function(scope, element, attr) {

            console.log(scope.data);
            
          }
        
	};
	
		});



// Googles call back fucntion on clicking sign out;


  















