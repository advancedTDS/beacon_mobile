
//Called when application is started.
function OnStart()
{




	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	

	//Create image 1/5 of screen width and correct aspect ratio.
	img = app.CreateImage( "Img/Beacon.png", 1, .5);
	lay.AddChild( img );
	
	//Create a button 1/3 of screen width and 1/10 screen height.
	btn = app.CreateButton( "Open Beacon", 0.3, 0.1 );
	btn.SetMargins( 0, 0.05, 0, 0 );
	lay.AddChild( btn );
	
	//Set function to call when button pressed.
	btn.SetOnTouch( btn_OnTouch );
	
	//Add layout to app.	
	app.AddLayout( lay );
}

//Called when user touches our button.
function btn_OnTouch()
	//clears screen.
{	
lay.RemoveChild( btn );
lay.RemoveChild( img );



	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );	
	
	
	btnNewEntry = app.CreateButton( "New Entry", 0.5, 0.1);
	btnNewEntry.SetMargins( 0,  0.05, 0, 0 );
	btnNewEntry.SetOnTouch( btnNewEntry_OnTouch );
	lay.AddChild( btnNewEntry );
	
	//btnTrackEntry = app.CreateButton( "Track Entry", 0.5, 0.1 );
	//btnTrackEntry.SetMargins(0, 0.05,0,0);
	//btnTrackEntry.SetOnTouch( btnTrackEntry_OnTouch);
	//lay.AddChild( btnTrackEntry );
	
	//Create a choose file button.
//	btnFile = app.CreateButton( "Choose File", 0.5, 0.1 );
//	btnFile.SetMargins( 0, 0.05, 0, 0 );
//	btnFile.SetOnTouch( btnFile_OnTouch );
//	lay.AddChild( btnFile );
	
	//Create a choose phone number button.
//	btnPhone = app.CreateButton( "Choose Phone", 0.5, 0.1 );
	//btnPhone.SetMargins( 0, 0.05, 0, 0 );
//	btnPhone.SetOnTouch( btnPhone_OnTouch );
//	lay.AddChild( btnPhone );
	
	//Create a choose email button.
//	btnEmail = app.CreateButton( "Choose Email", 0.5, 0.1 );
//	btnEmail.SetMargins( 0, 0.05, 0, 0 );
//	btnEmail.SetOnTouch( btnEmail_OnTouch );
//	lay.AddChild( btnEmail );
	
	//Create a choose Google account.
//	btnAccount = app.CreateButton( "Choose Account", 0.5, 0.1 );
//	btnAccount.SetMargins( 0, 0.05, 0, 0 );
//	btnAccount.SetOnTouch( btnAccount_OnTouch );
//	lay.AddChild( btnAccount );
	
	
	
	
	//Add layout to app.	
	app.AddLayout( lay );
}

function btnNewEntry_OnTouch()
{
//lay.RemoveChild( btnFile );
//lay.RemoveChild( btnEmail );
//lay.RemoveChild( btnPhone );
//lay.RemoveChild( btnAccount );
lay.RemoveChild( btnNewEntry );

var file = "demofile";
var file2 ="demofile2";


app.ClearData( file );
app.ClearData( file2 );


{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var text = app.LoadText( "value", "Name", file );
    edtValue = app.CreateTextEdit( text, .5 );
    lay.AddChild( edtValue );
    
    var text = app.LoadText("value2", "Item Number", file2 );
    edtValue2 = app.CreateTextEdit( text, .5 );
    lay.AddChild( edtValue2 );

    btnSave = app.CreateButton( "Save", 0.5, 0.1 );
    btnSave.SetOnTouch( btnSave_OnTouch );
    lay.AddChild( btnSave );

    btnSubmit = app.CreateButton( "Submit",  0.5, 0.1 );
    btnSubmit.SetOnTouch( btnSubmit_OnTouch );
    lay.AddChild( btnSubmit );
    
    btnQuit = app.CreateButton( "Quit" , 0.5, 0.1 );
    btnQuit.SetOnTouch( btnQuit_OnTouch );
    lay.AddChild( btnQuit );
    
    //btnGoBack = app.CreateButton("Go Back", 0.5, 0.1 );
    //btnGoBack.SetOnTouch( btnGoBack_OnTouch )

    app.AddLayout( lay );
}

function btnSave_OnTouch()
{
    app.SaveText( "Item Name", edtValue.GetText(), file );
    app.SaveText( "Item Number", edtValue2.GetText(), file );
    app.ShowPopup( "Stored." );
}

function btnSubmit_OnTouch()
{
//invoke Transaction here to submit data.

     app.ShowPopup( "Sent" );
}


    var value = app.LoadText( "Item Name",  "no value stored", file );
    app.ShowPopup( value );
    var value2 = app.LoadText( "Item Number", "no value stores", file);
    app.ShowPopup ( value2 );
}

function btnQuit_OnTouch()
{
app.Exit( );	
}





//Called when user touches our 'Choose File' button.
function btnFile_OnTouch()
{
	app.ChooseFile( "Choose a file", "*/*", OnFileChoose );
}

//Called when a file is chosen.
function OnFileChoose( fileName )
{
    app.ShowPopup( fileName );
}

//Called when user touches our 'Choose Phone' button.
function btnPhone_OnTouch()
{
	app.ChooseContact( "phone", OnPhoneChoose );
}

//Called when an phone contact is chosen.
function OnPhoneChoose( name, number )
{
     app.ShowPopup( name + " " + number );
}

//Called when user touches our Choose Email button.
function btnEmail_OnTouch()
{
	app.ChooseContact( "email", OnEmailChoose );
}

//Called when an email is chosen.
function OnEmailChoose( name, email )
{
     app.ShowPopup( name + " " + email );
}

//Called when user touches our 'Choose Account' button.
function btnAccount_OnTouch()
{
    app.ChooseAccount( OnAccountChoose );
}

//Called when an account is chosen.
function OnAccountChoose( email )
{
     app.ShowPopup( email );
}