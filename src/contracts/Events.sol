//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Events {

    //  uint256 public totalAttendees = 0;
    // uint256 public totalProposals = 0;
    // uint256 public totalEvents = 0;
    // Structure to represent an event
    struct Event {
        string name;
        uint256 date;
        string location;
        uint256 maxAttendees;
        uint256 registeredAttendees;
        mapping(address => bool) useradd;
        bool exists;
    }

        struct Proposal {
        uint256 id;
        string title;
        string description;
        address creator;
        bool isOpen;
        // Add more fields as needed
    }

    mapping(uint256 => Proposal) public proposals;
    uint256 public proposalCounter;

    
    
    // Array to store all events
    Event[] public events;
    // Event emitted when a new event is created
    event EventCreated(uint256 eventId);

    // Function to create a new event
    function createEvent(
        string memory _name,
        uint256 _date,
        string memory _location,
        uint256 _maxAttendees
    ) public {
        Event storage myevent = events.push();
        myevent.name= _name;
        myevent.date = _date;
        myevent.location= _location;
        myevent.maxAttendees = _maxAttendees;
        myevent.exists = true;
        emit EventCreated(events.length - 1);
    }

    // Function to register for an event
    function registerForEvent(uint256 _eventId) public {
        // Check if the event exists
        require(_eventId < events.length, "Event does not exist");

        Event storage selectedEvent = events[_eventId];

        // Check if there are available slots
        require(
            selectedEvent.registeredAttendees < selectedEvent.maxAttendees,
            "No available slots for this event"
        );

        // Check if the sender is already registered
        require(
            !selectedEvent.useradd[msg.sender],
            "You are already registered for this event"
        );

        // Register the sender for the event
        selectedEvent.useradd[msg.sender] = true;
        selectedEvent.registeredAttendees++;
    }

    // Function to get the details of an event
    function getEventDetails(uint256 _eventId)
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            uint256,
            uint256
        )
    {
        // Check if the event exists
        require(_eventId < events.length, "Event does not exist");

        Event storage selectedEvent = events[_eventId];

        return (
            selectedEvent.name,
            selectedEvent.date,
            selectedEvent.location,
            selectedEvent.maxAttendees,
            selectedEvent.registeredAttendees
        );
    }

    event ProposalCreated(uint256 proposalId, string title, address creator);

    // Function to create a proposal
    function createProposal(
        uint256 eventId,
        string memory proposalTitle,
        string memory proposalDescription
    ) external {
        // Check if the event exists
        require(events[eventId].exists, "Event does not exist");

        // Increment the proposal counter
        proposalCounter++;

        // Create the proposal
        Proposal storage newProposal = proposals[proposalCounter];
        newProposal.id = proposalCounter;
        newProposal.title = proposalTitle;
        newProposal.description = proposalDescription;
        newProposal.creator = msg.sender;
        newProposal.isOpen = true;

        // Emit event
        emit ProposalCreated(proposalCounter, proposalTitle, msg.sender);
    }
}
